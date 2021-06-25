from django.urls import include, path
from user import views

urlpatterns = [
    path('auth/', include('rest_auth.urls')),
    path('auth/register/', include('rest_auth.registration.urls')),
    #path('signup/', views.signup),  #추가해줌
    #path('login/', views.login),  #추가해줌
]