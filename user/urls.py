from django.urls import include, path
from . import views
from django.contrib import admin

from .views import UserRatingVIEW, UserPostingClickVIEW, PasswordTokenCheckAPI, RequestPasswordResetEmail, SetNewPasswordAPIView, \
    UserMbtiVIEW, ratingDetails, UserPostingLikeVIEW, UserPostingLikeDetails
from django.contrib.auth import views as auth_views
from django.views.decorators.csrf import csrf_exempt

from rest_auth.views import LogoutView, LoginView, PasswordResetView, PasswordResetConfirmView

urlpatterns = [
    path('auth/', include('rest_auth.urls')),
    path('auth/signup/', include('rest_auth.registration.urls')),

    path('request-reset-email/', RequestPasswordResetEmail.as_view(), name='request-reset-email'),
    path('password-reset/<uidb64>/<token>',PasswordTokenCheckAPI.as_view(), name='password-reset-confirm'),
    path('password-reset-complete/', SetNewPasswordAPIView.as_view(), name='password-reset-complete'),


    # path('auth/password/reset/', PasswordResetView.as_view()),
    # path('password_reset_done/', auth_views.PasswordResetDoneView.as_view(), name="password_reset_done"),
    # path('password_reset_confirm/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(), name="password_reset_confirm"),
    # path('password_reset_complete/', auth_views.PasswordResetCompleteView.as_view(), name="password_reset_complete"),


    # path('admin/', admin.site.urls),
    path('usermbti/', UserMbtiVIEW.as_view()),
    path('userrating/', UserRatingVIEW.as_view()),
    path('userrating/<int:ratingId>', ratingDetails.as_view()),
    path('userpostingclick/', UserPostingClickVIEW.as_view()),
    path('userpostinglike/', UserPostingLikeVIEW.as_view()),
    path('userpostinglike/<str:email>/<int:post_id>', UserPostingLikeDetails.as_view()),
]