from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('notes/', views.getNotes, name="notes"),
    path('notes/create/', views.CreateNote, name="create"),
    path('notes/<str:pk>/', views.getNote, name="note"),
    path('notes/<str:pk>/update', views.UpdateNote, name="update"),
    path('notes/<str:pk>/delete', views.DeleteNote, name="delete"),
]