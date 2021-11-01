from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import APIView, api_view
from rest_framework.exceptions import AuthenticationFailed

from .models import UserRating, UserPostingClick, UserMbti, UserPostingLike
from .serializers import UserRatingSerializer, UserMbtiSerializer, UserPostingClickSerializer,UserPostingLikeSerializer, \
    ResetPasswordEmailRequestSerializer,SetNewPasswordSerializer
from rest_framework.response import Response
from rest_framework import generics, status
from .models import CustomUser

from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import smart_str, force_str, smart_bytes, DjangoUnicodeDecodeError
from django.utils.http import  urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from .utils import Util


from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from .job_code import job_code, large_job_code

class RequestPasswordResetEmail(generics.GenericAPIView):
    serializer_class = ResetPasswordEmailRequestSerializer
    # 권한 해제
    authentication_classes =[]
    permission_classes = []
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        email = request.data['email']
        if CustomUser.objects.filter(email=email).exists():
            user = CustomUser.objects.get(email=email)
            uidb64 = urlsafe_base64_encode(smart_bytes(user.id))
            token = PasswordResetTokenGenerator().make_token(user)
            current_site = get_current_site(
                request=request).domain
            # example.com 으로 나옴
            print(current_site)
            relativeLink = reverse('password-reset-confirm', kwargs={'uidb64':uidb64,'token':token})
            absurl = 'http://127.0.0.1:3000'+relativeLink
            email_body = "<h3>안녕하세요. " +user.username+'님,</h3> <p> 아래의 링크로 접속 시, 비밀번호 재설정이 가능합니다. </p> ' + absurl
            data = {'email_body':email_body,'to_email':user.email,
                    'email_subject':'[MBTI]비밀번호 재설정을 위한 링크입니다.'}

            Util.send_email(data)
        #     success 확인
        else:
            return Response({'result' : 'fail'},status=status.HTTP_400_BAD_REQUEST)

        return Response({'result' : 'success'}, status=status.HTTP_200_OK)


class PasswordTokenCheckAPI(generics.GenericAPIView):
    # 권한 해제
    authentication_classes = []
    permission_classes = []
    def get(self, request, uidb64, token):
        try:
            id = smart_str(urlsafe_base64_decode(uidb64))
            user = CustomUser.objects.get(id=id)

            if not PasswordResetTokenGenerator().check_token(user,token):
                return Response({'error':'Token is not valid, please request a new one'},status=status.HTTP_401_UNAUTHORIZED)
            return Response({'success' : True,'message':'Credentials Valid','uid':uidb64,'token':token},status=status.HTTP_200_OK)

        except DjangoUnicodeDecodeError as identifier:
            return Response({'error': 'Token is not valid, please request a new one'}, status=status.HTTP_401_UNAUTHORIZED)


class SetNewPasswordAPIView(generics.GenericAPIView):
    serializer_class = SetNewPasswordSerializer
    # 권한 해제
    authentication_classes = []
    permission_classes = []
    def post(self,request):
        serializer = self.serializer_class(data=request.data)
        # serializer.is_valid(raise_exception=True)
        uid = request.data['uid']
        password = request.data['password']

        id = force_str(urlsafe_base64_decode(uid))
        user = CustomUser.objects.get(id=id)

        user.set_password(password)
        user.save()

        return Response({'success':True, 'message':'Password reset Success'},status=status.HTTP_200_OK)



class UserRatingVIEW(generics.ListAPIView): #알바평가 db에 넣고 가져오기(Create, Read)
    queryset = UserRating.objects.exclude(job='0')
    # print("queryset", queryset)
    serializer_class = UserRatingSerializer

    #queryset = UserRating.objects.all()

    def get_queryset(self):
        qs = super().get_queryset()
        search = self.request.query_params.get('search')
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



class UserPostingClickVIEW(generics.ListAPIView): #사용자가 클릭한 공고 및 머무른 시간
    queryset = UserPostingClick.objects.all()
    serializer_class = UserPostingClickSerializer

    def get(self, request):
        return self.list(request)

    def post(self, request): #CreateModelMixin을 사용했기 때문에 drf api에 양식이 생김
        serializer = UserPostingClickSerializer(data = request.data)  # JSON -> Serialize

        if serializer.is_valid():  # 타당성 검토 후 저장
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


class UserPostingLikeVIEW(generics.ListAPIView): #공고 좋/싫 Create, Read
    queryset = UserPostingLike.objects.all()
    serializer_class = UserPostingLikeSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        search = self.request.query_params.get('search')
        if search:
            qs = qs.filter(email=search)
        return qs

    def post(self, request):  # CreateModelMixin을 사용했기 때문에 drf api에 양식이 생김
        serializer = UserPostingLikeSerializer(data=request.data)  # JSON -> Serialize

        if serializer.is_valid():  # 타당성 검토 후 저장
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


class UserPostingLikeDetails(APIView):  #공고 좋/싫 Update, Delete
    def get_object(self, email, post_id):
        try:  # 고유키(email+공고id로 구분함)를 넣어서 객체를 얻어옴
            return UserPostingLike.objects.get(email=email, post_id=post_id)
        except UserPostingLike.DoesNotExist:  # 얻어올 객체가 없으면 404에러
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, email, post_id):
        if UserPostingLike.objects.filter(email=email, post_id=post_id).exists(): #데이터가 있으면
            userpostinglike = self.get_object(email, post_id)
            serializer = UserPostingLikeSerializer(userpostinglike)
            return Response(serializer.data)
        else:
            return Response(0)

    def put(self, request, email, post_id):
        userpostinglike = self.get_object(email, post_id)
        serializer = UserPostingLikeSerializer(userpostinglike, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, email, post_id):
        userpostinglike = self.get_object(email, post_id)
        userpostinglike.delete()
        return Response(status=201)
        #return Response(status=status.HTTP_204_NO_CONTENT)  # 내용이 없다




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

