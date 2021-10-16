from django.urls import include, path
from . import views
from django.contrib import admin
from .views import UserRatingVIEW, UserPostingLikeVIEW, UserMbtiVIEW, ratingDetails

urlpatterns = [
    path('auth/', include('rest_auth.urls')),
    path('auth/signup/', include('rest_auth.registration.urls')),
    # path('admin/', admin.site.urls),
    path('usermbti/', UserMbtiVIEW.as_view()),
    path('userrating/', UserRatingVIEW.as_view()),
    path('userrating/<int:ratingId>', ratingDetails.as_view()),
    path('userpostinglike/', UserPostingLikeVIEW.as_view()),
]