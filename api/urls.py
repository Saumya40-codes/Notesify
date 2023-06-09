from django.urls import path
from . import views
from .views import MyTokenObtainPairView
from .views import UserRegistrationView


from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
 
urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('notes/', views.getNotes, name="notes"),
    # path('notes/create/', views.CreateNote, name="create"),
    path('register/', UserRegistrationView.as_view(), name="register"),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name="token_refresh"),
    path('notes/<str:pk>/', views.getNote, name="note"),
    # path('notes/<str:pk>/update', views.UpdateNote, name="update"),
    # path('notes/<str:pk>/delete', views.DeleteNote, name="delete"),
]