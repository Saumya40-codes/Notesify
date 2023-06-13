from .models import Note
from .serializers import NoteSerializer
from rest_framework.response import Response
from django.contrib.auth.models import User


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
      user = request.user
      username = User.objects.get(username=user)
      notes = Note.objects.filter(user=username).order_by('-updated')
      serializers = NoteSerializer(notes, many = True)
      return Response(serializers.data)

def createNote(request):
    data = request.data
    user = request.user

    note = Note.objects.create(user=user, body=data['body'])
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)
