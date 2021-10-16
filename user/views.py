from .models import UserRating, UserPostingLike, UserMbti
from .serializers import UserRatingSerializer, UserPostingLikeSerializer, UserMbtiSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import APIView, api_view
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import render, HttpResponse
from rest_framework import generics
from rest_framework import mixins
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

# from MBTI.modules.db.models import User

from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter



from .job_code import job_code, large_job_code

class UserRatingVIEW(generics.ListAPIView): #알바평가 db에 넣고 가져오기(Create, Read)
    queryset = UserRating.objects.exclude(job='0')
    print("queryset", queryset)
    serializer_class = UserRatingSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        #qs = queryset.get_queryset()
        print("qs:",qs)
        search = self.request.query_params.get('search')
        print("search: ", search)
        if search:
            qs = qs.filter(email=search)
            for rating in qs:
                largejobcode = rating.jobfamily
                subcode = rating.job
                rating.jobfamily = dict(map(reversed,large_job_code.items()))[largejobcode]
                rating.job = dict(map(reversed,job_code[largejobcode].items()))[subcode]
        return qs

    def post(self, request): #CreateModelMixin을 사용했기 때문에 drf api에 양식이 생김
        serializer = UserRatingSerializer(data=request.data)  # JSON -> Serialize

        largejobcode = large_job_code[request.data['jobfamily']]
        request.data['jobfamily'] = largejobcode
        if(request.data['job']!='0'):
            request.data['job'] = job_code[largejobcode][request.data['job']]

        if serializer.is_valid():  # 타당성 검토 후 저장
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


class ratingDetails(APIView):  #알바평가 Update, Delete
    def get_object(self, ratingId):
        try:  # 고유키를 넣어서 Article 객체를 얻어옴
            return UserRating.objects.get(id=ratingId)

        except UserRating.DoesNotExist:  # 얻어올 객체가 없으면 404에러
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, ratingId):
        rating = self.get_object(ratingId)
        serializer = UserRatingSerializer(rating)
        return Response(serializer.data)

    def put(self, request, ratingId):
        rating = self.get_object(ratingId)
        serializer = UserRatingSerializer(rating, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, ratingId):
        article = self.get_object(ratingId)
        article.delete()
        return Response(status=201)
        #return Response(status=status.HTTP_204_NO_CONTENT)  # 내용이 없다



class UserPostingLikeVIEW(generics.ListAPIView):
    queryset = UserPostingLike.objects.all()
    serializer_class = UserPostingLikeSerializer

    def get(self, request):
        return self.list(request)

    def post(self, request): #CreateModelMixin을 사용했기 때문에 drf api에 양식이 생김
        serializer = UserPostingLikeSerializer(data = request.data)  # JSON -> Serialize

        if serializer.is_valid():  # 타당성 검토 후 저장
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

class UserMbtiVIEW(generics.ListAPIView):
    queryset = UserMbti.objects.all()
    serializer_class = UserMbtiSerializer

    def get(self, request):
        return self.list(request)

    def post(self, request): #CreateModelMixin을 사용했기 때문에 drf api에 양식이 생김
        serializer = UserMbtiSerializer(data = request.data)  # JSON -> Serialize

        if serializer.is_valid():  # 타당성 검토 후 저장
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

