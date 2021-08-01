from django.urls import include, path
from . import views

urlpatterns = [
    path('auth/', include('rest_auth.urls')),
    path('auth/signup/', include('rest_auth.registration.urls')),
]