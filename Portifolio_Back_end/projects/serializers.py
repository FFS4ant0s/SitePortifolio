from rest_framework import serializers
from .models import Project


class ProjectSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    def get_image(self, obj):
        request = self.context.get('request')
        if obj.image:
            return request.build_absolute_uri(obj.image.url)
        return None

    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'technologies', 'url', 'image']
