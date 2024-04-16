from django.contrib import admin
from .models import Artist, Album, Track

# Register your models here.
admin.site.register(Artist)
admin.site.register(Album)
# admin.site.register(Track)

class TrackAdmin(admin.ModelAdmin):
    list_display = ['title', 'artist', 'album']
    list_filter = ['album__title']

admin.site.register(Track, TrackAdmin)