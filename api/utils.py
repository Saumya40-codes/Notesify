from .models import Note
from .serializers import NoteSerializer
from rest_framework.response import Response


def getNoteList(request,pk):
       notes = Note.objects.get(id=pk)
       serializers = NoteSerializer(notes, many = False)
       return Response(serializers.data)

def updateNote (request, pk):
    notes = Note.objects.get(id=pk)
    serializers = NoteSerializer(instance=notes, data=request.data)
    if serializers.is_valid():
           serializers.save()
    return Response(serializers.data)

def deleteNote (request,pk):
    notes = Note.objects.get(id=pk)
    notes.delete()
    return Response('Note was deleted')

def getNotesList(request):
      notes = Note.objects.all().order_by('-updated')
      serializers = NoteSerializer(notes, many = True)
      return Response(serializers.data)

def createNote (request):
      data  = request.data
      notes = Note.objects.create(
            body = data['body']
        )
      serializers = NoteSerializer(notes, many = False)
      return Response(serializers.data)