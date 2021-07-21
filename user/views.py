from django.db.migrations import serializer
from django.shortcuts import render
from requests import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny

class getByToken():
    def get(self, request, format=None):
        print(request.user)
        print(request.auth)
