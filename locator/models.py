from __future__ import unicode_literals

from django.contrib.auth.models import User
from django.db import models
import datetime
from django.core.validators import MaxValueValidator, MinValueValidator

import PIL

class Pokemon(models.Model):
    name = models.CharField(max_length=255, blank=False, unique=True)
    image = models.ImageField(upload_to='pokemon')
    pokedex_id = models.IntegerField(unique=True, blank=True)
    # evolution = models.PositiveIntegerField()
    def __str__(self):
        return self.name

class MapPoint(models.Model):
    pokemon = models.ForeignKey(Pokemon)
    lat = models.FloatField(blank=True, null=True)
    lon = models.FloatField(blank=True, null=True)
    added_by = models.ForeignKey(User)
    found = models.IntegerField(default=1)
    seen = models.IntegerField(default=0)
    nope = models.IntegerField(default=0)
    # accuracy_rating = models.IntegerField(default=0)
    # day is a bool specifying whether the app was in day (true) or night (false) mode. This is confusing. Rename later.
    day = models.BooleanField(default=True)
    hour_found = models.IntegerField(
        default=1,
        validators=[MaxValueValidator(24), MinValueValidator(1)]
     )
    # comments = models.ForeignKey(Comment, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.pokemon.name + " added by " + self.added_by.username
