# Generated by Django 5.1.6 on 2025-02-19 17:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('technologies', models.CharField(max_length=100)),
                ('url', models.URLField()),
                ('image', models.ImageField(blank=True, null=True, upload_to='projects/')),
            ],
        ),
    ]
