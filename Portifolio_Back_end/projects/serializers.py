# Crie a API para Exibir Projetos: No Django Rest Framework,
# pode criar um serializer para converter os dados dos projetos para JSON.

from rest_framework import serializers
from .models import Project


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'technologies', 'url', 'image']
