# portfolio/models.py
from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.title

class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name}"


# portfolio/serializers.py
from rest_framework import serializers
from .models import Project, ContactMessage

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'


# portfolio/views.py
from rest_framework import generics
from .models import Project, ContactMessage
from .serializers import ProjectSerializer, ContactMessageSerializer

class ProjectListAPIView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ContactMessageCreateAPIView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer


# portfolio/urls.py
from django.urls import path
from .views import ProjectListAPIView, ContactMessageCreateAPIView

urlpatterns = [
    path('projects/', ProjectListAPIView.as_view(), name='project-list'),
    path('contact/', ContactMessageCreateAPIView.as_view(), name='contact-create'),
]


# main urls.py (e.g. mysite/urls.py)
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('portfolio.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


# settings.py (relevant parts)
INSTALLED_APPS = [
    ...,
    'rest_framework',
    'portfolio',
]

MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'
