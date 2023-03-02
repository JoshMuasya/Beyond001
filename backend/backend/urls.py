from django.urls import path, include
from rest_framework import routers
from sheki import views
from django.conf import settings
from django.conf.urls.static import static

routers = routers.DefaultRouter()
routers.register(r'users', views.UserViewSet)
routers.register(r'groups', views.GroupViewSet)
routers.register(r'gallery', views.GalleryViewSet)

urlpatterns = [
    path('', include(routers.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
