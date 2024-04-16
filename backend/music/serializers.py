from rest_framework import serializers
from .models import Artist, Album, Track

class TrackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Track
        fields = '__all__'
        depth = 1

class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = ['name']

class AlbumSerializer(serializers.ModelSerializer):
    tracks = TrackSerializer(many=True, read_only=True)
    artist = ArtistSerializer()
    
    class Meta:
        model = Album
        fields = ['id', 'cover', 'title', 'artist', 'tracks']

