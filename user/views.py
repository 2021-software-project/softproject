from .models import UserRating
from .serializers import UserRatingSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import render, HttpResponse
from rest_framework import generics
from rest_framework import mixins
# from MBTI.modules.db.models import User

# Create your views here.
from rest_framework import viewsets


#APIView로 Mixins 사용함
class UserRatingVIEW(generics.GenericAPIView, mixins.ListModelMixin,
                  mixins.CreateModelMixin):
    queryset = UserRating.objects.all()
    serializer_class = UserRatingSerializer

    def get(self, request):  #내가 가지고 있는 article들을 보여줌
        return self.list(request)

    def post(self, request): #CreateModelMixin을 사용했기 때문에 drf api에 양식이 생김
        return self.create(request)



# Create your views here.

#from rest_framework.decorators import api_view, permission_classes
#from rest_framework.permissions import AllowAny

#from user.serializers import UserCreateSerializer

#@api_view(['POST'])
#@permission_classes([AllowAny]) # 인증 필요없다
#def signup(request):
 #   serializer = UserCreateSerializer(data=request.data)
  #  if serializer.is_valid(raise_exception=True):
   #     serializer.save() # DB 저장
    #    return Response(serializer.data, status=201)
