from __future__ import unicode_literals

from django.contrib.auth.models import User
from django.db import models
import datetime

# from oauth2client.contrib.django_orm import FlowField, CredentialsField

import PIL

# Create your models here.

# class FlowModel(models.Model):
#   id = models.ForeignKey(User, primary_key=True)
#   flow = FlowField()
#
# class CredentialsModel(models.Model):
#   id = models.ForeignKey(User, primary_key=True)
#   credential = CredentialsField()

class Pokemon(models.Model):
    name = models.CharField(max_length=255, blank=False, unique=True)
    image = models.ImageField(upload_to='pokemon')
    pokedex_id = models.IntegerField(unique=True, blank=True)
    evolution = models.PositiveIntegerField()
    def __str__(self):
        return self.name

""" p sure I'm just gonna use disqus
class Comment(models.Model):
    title = models.CharField(max_length=50)
    text = models.TextField()
    likes = models.IntegerField(default=0)
    author = models.ForeignKey(User)
"""

class MapPoint(models.Model):
    pokemon = models.ForeignKey(Pokemon)
    lat = models.FloatField(blank=True, null=True)
    lon = models.FloatField(blank=True, null=True)
    added_by = models.ForeignKey(User)
    likes = models.IntegerField(default=0)
    # comments = models.ForeignKey(Comment, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.pokemon.name + " added by " + self.added_by.username
