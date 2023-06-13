from django.db import models

# Create your models here.
class Note(models.Model):
    body = models.TextField(max_length=200, null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.body[:50]
    

class Login(models.Model):
    username = models.CharField(max_length=200, null=True, blank=True)
    password = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return self.username
    