from django.urls import path
from . import views

urlpatterns = [
    path('tracks/', views.TrackListCreateAPI.as_view(), name='tracks'),
    path('albums/', views.AlbumListCreateAPI.as_view(), name='albums'),
    path('albums/<int:pk>/', views.AlbumRetrieveAPI.as_view(), name='get-album'),
    
    path('playlists/', views.playlistList, name='playlists'),
    path('playlist/<int:pk>/', views.playlistDetail, name='playlist'),
]
