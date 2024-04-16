from rest_framework import generics
from .models import Track, Album
from .serializers import TrackSerializer, AlbumSerializer

from django.shortcuts import render

# Create your views here.
class TrackListCreateAPI(generics.ListCreateAPIView):
    queryset = Track.objects.all()
    serializer_class = TrackSerializer
    
class AlbumListCreateAPI(generics.ListCreateAPIView):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer

class AlbumRetrieveAPI(generics.RetrieveAPIView):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer
    lookup_field = 'pk'

my_playlists = [
    {
        "id": 1,
        "name": "ano ba tayo?",
        "desc": "label plsss :((",
        "songs": [
            {
                "name": "may halaga pa ba ako sayo??",
                "artist": "juan karlos",
            },
            {
                "name": "Tapusin Na Natin To",
                "artist": "juan karlos",
            },
        ],
    },
    
    {
        "id": 2,
        "name": "balik tayo sa nakaraan",
        "desc": "sana mabago pa :(",
        "songs": [
            {
                "name": "Time Machine",
                "artist": "juan karlos",
            },
            {
                "name": "Languyin",
                "artist": "autotelic",
            },
            {
                "name": "Laro",
                "artist": "autotelic",
            },
        ],
    }
]

def playlistList(request):
    context = {
        "playlists": my_playlists
    }
    return render(request, "music/playlists.html", context)

def playlistDetail(request, pk):
    for my_playlist in my_playlists:
        if my_playlist["id"] == pk:
            playlist = my_playlist
            
    context = {
        "playlist": playlist,
    }
    return render(request, "music/playlist.html", context)