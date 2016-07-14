from __future__ import unicode_literals

from django.contrib.auth.models import User
from django.db import models

import PIL

# Create your models here.

class Pokemon(models.Model):
    name = models.CharField(max_length=255, blank=False, unique=True)
    image = models.ImageField(upload_to='pokemon')
    pokedex_id = models.IntegerField(unique=True, blank=True)
    evolution = models.PositiveIntegerField()
    def __str__(self):
        return self.name

class Comment(models.Model):
    title = models.CharField(max_length=50)
    text = models.TextField()
    likes = models.IntegerField(default=0)
    author = models.ForeignKey(User)

class MapPoint(models.Model):
    pokemon = models.ForeignKey(Pokemon)
    lat = models.FloatField(blank=True, null=True)
    lon = models.FloatField(blank=True, null=True)
    added_by = models.ForeignKey(User)
    likes = models.IntegerField(default=0)
    comments = models.ForeignKey(Comment, null=True, blank=True)
    def __str__(self):
        return self.pokemon.name + " added by " + self.added_by.username
