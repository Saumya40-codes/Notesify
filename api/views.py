from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import NoteSerializer
from .models import Note

from .utils import updateNote, deleteNote, getNoteList, getNotesList, createNote
# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]

    return Response(routes)

@api_view(['GET', 'POST'])
def getNotes(request):
    if request.method == 'GET':
        return getNotesList(request)
    if request.method == 'POST':
        return createNote(request)
    


@api_view(['GET','PUT','DELETE'])
def getNote(request, pk):
    if request.method == 'GET':
       return getNoteList(request,pk)
    
    if request.method == 'PUT':
        return updateNote(request,pk)
    
    if request.method == 'DELETE':
        return deleteNote (request,pk)


# for ref

# @api_view(['PUT'])
# def UpdateNote(request,pk):
#     notes = Note.objects.get(id=pk)
#     serializers = NoteSerializer(instance=notes, data=request.data)
#     if serializers.is_valid():
#         serializers.save()
#     return Response(serializers.data)

# @api_view(['DELETE'])
# def DeleteNote (request,pk):
#     notes = Note.objects.get(id=pk)
#     notes.delete()
#     return Response('Note was deleted')

# @api_view(['POST'])
# def CreateNote (request):
#     data  = request.data
#     notes = Note.objects.create(
#         body = data['body']
#     )
#     serializers = NoteSerializer(notes, many = False)
#     return Response(serializers.data)