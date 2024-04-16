from django.db import models

class Artist(models.Model):
    name = models.CharField(max_length=64)
    
    def __str__(self):
        return self.name

class Album(models.Model):
    cover = models.ImageField(upload_to='covers/')
    title = models.CharField(max_length=64)
    artist = models.ForeignKey('Artist', on_delete=models.CASCADE)
    
    def __str__(self):
        return f"{self.title} by {self.artist}"

class Track(models.Model):
    album = models.ForeignKey('Album', related_name='tracks', on_delete=models.CASCADE)
    title = models.CharField(max_length=64)
    artist = models.ForeignKey('Artist', on_delete=models.CASCADE)
    audio = models.FileField(upload_to='tracks/')
    
    def __str__(self):
        return f"{self.title} by {self.artist}"