from django.contrib import admin
from .models import Project


class ProjectAdmin(admin.ModelAdmin):
    # Campos que serão exibidos na listagem
    list_display = ('title', 'description', 'technologies',
                    'created_at', 'updated_at')

    # Campos que serão usados para busca
    search_fields = ('title', 'description', 'technologies')

    # Campos que serão exibidos ao editar/visualizar
    fields = ('title', 'description', 'technologies', 'url', 'image')

    # Filtro lateral para facilitar a administração
    list_filter = ('created_at', 'updated_at')

    # Possibilita a ordenação por alguns campos
    ordering = ('-created_at',)


# Registra o modelo Project no Django Admin
admin.site.register(Project, ProjectAdmin)
