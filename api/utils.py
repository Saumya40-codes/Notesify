from .models import Note
from .serializers import NoteSerializer
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.http import JsonResponse


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

def createUser(request):
    username = request.POST.get('username')
    password = request.POST.get('password')

    if username and password:
        # Check if the user already exists
        if User.objects.filter(username=username).exists():
            return JsonResponse({'error': 'Username already exists'}, status=400)

        # Create a new user
        user = User.objects.create_user(username=username, password=password)

        # Customize the response as needed
        response_data = {
            'message': 'User registered successfully',
            'username': user.username,
        }
        return JsonResponse(response_data, status=201)

    return JsonResponse({'error': 'Invalid username or password'}, status=400)
