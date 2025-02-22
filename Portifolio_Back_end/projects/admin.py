from django.contrib import admin
from .models import Project


class ProjectAdmin(admin.ModelAdmin):
    # Campos que serão exibidos na listagem
    list_display = ('name', 'description', 'created_at', 'updated_at')

    # Campos que serão usados para busca
    search_fields = ('name', 'description')

    # Campos que serão exibidos ao editar/visualizar
    fields = ('name', 'description', 'whatsapp_link', 'image')

    # Filtro lateral para facilitar a administração
    list_filter = ('created_at', 'updated_at')

    # Possibilita a ordenação por alguns campos
    ordering = ('-created_at',)


# Registra o modelo Project no Django Admin
admin.site.register(Project, ProjectAdmin)
