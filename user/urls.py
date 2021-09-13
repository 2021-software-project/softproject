from django.urls import include, path
from . import views
from django.contrib import admin
from .views import UserRatingVIEW, UserPostingLikeVIEW

urlpatterns = [
    path('auth/', include('rest_auth.urls')),
    path('auth/signup/', include('rest_auth.registration.urls')),
    # path('admin/', admin.site.urls),
    path('userrating/', UserRatingVIEW.as_view()),
    path('userpostinglike/', UserPostingLikeVIEW.as_view()),
]