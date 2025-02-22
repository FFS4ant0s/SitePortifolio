from django.urls import path, include
from rest_framework.routers import DefaultRouter
from projects.views import ProjectViewSet
from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings

router = DefaultRouter()
router.register(r'projects', ProjectViewSet, basename='project')

urlpatterns = [
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
