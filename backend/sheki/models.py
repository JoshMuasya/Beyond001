from django.db import models
from django.contrib.auth.models import User


def upload_to(instance, filename):
    return 'events/{title}/{filename}'.format(title=instance.title, filename=filename)


class Gallery(models.Model):
    title = models.CharField(max_length=255)
    date = models.DateField(auto_created=True, auto_now_add=True)
    image = models.ImageField(upload_to=upload_to)
