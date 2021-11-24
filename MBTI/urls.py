"""MBTI URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from rest_framework import routers
#from .view import mbtiRcm, persRcm ,postings

router = routers.DefaultRouter()

urlpatterns = [
    url(r'^$',TemplateView.as_view(template_name='index.html'),name='index'),
    url(r'^(main)/', TemplateView.as_view(template_name='index.html'), name='index'),
    url(r'^(login)/', TemplateView.as_view(template_name='index.html'), name='index'),
    url(r'^(firstulike)/', TemplateView.as_view(template_name='index.html'), name='index'),
    url(r'^(mypage)/', TemplateView.as_view(template_name='index.html'), name='index'),
    url(r'^(Mbti_rcm)/', TemplateView.as_view(template_name='index.html'), name='index'),
    url(r'^(Mbti_result)/', TemplateView.as_view(template_name='index.html'), name='index'),
    url(r'^(Personal_rcm)/', TemplateView.as_view(template_name='index.html'), name='index'),
    url(r'^(Perconal_result)/', TemplateView.as_view(template_name='index.html'), name='index'),
    url(r'^(Alba_rating)/', TemplateView.as_view(template_name='index.html'), name='index'),
    url(r'^(Rating_list)/', TemplateView.as_view(template_name='index.html'), name='index'),
    url(r'^(informaion)/', TemplateView.as_view(template_name='index.html'), name='index'),
    url(r'^(error)/', TemplateView.as_view(template_name='index.html'), name='index'),
    url(r'^(information/)', TemplateView.as_view(template_name='index.html'), name='index'),
    url(r'^(password-reset)', TemplateView.as_view(template_name='index.html'), name='password-reset'),

    # path('password-reset/<uidb64>/<token>', TemplateView.as_view(template_name='index.html'), name='password-reset'),

    path('user/', include('user.urls')),
    path('admin/', admin.site.urls),
    #path('mbtircm/', mbtiRcm.as_view(), name='mbtircm'),
    #path('persrcm/', persRcm.as_view(), name='persrcm'),
    #path('postings/', postings, name='postings'),
]
