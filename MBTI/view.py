# import json
#
# from django.views import View
# from django.http import HttpResponse, JsonResponse
# from django.core import serializers
# from django.shortcuts import render
# from django.views.decorators.csrf import csrf_exempt
# from rest_framework.response import Response
# from django.contrib.auth.models import User
# from django.contrib import messages
# # from MBTI.modules.db.models import User
#
# # Create your views here.
# from rest_framework import viewsets
#
# from .modules.mbtiRcm import randomRCM
#
# from django.views.decorators.csrf import csrf_exempt
# from django.utils.decorators import method_decorator
#
# from .models import JobPosting
# #from ..user.models import UserRating
# from django.core.mail.message import EmailMessage
#
#
# @method_decorator(csrf_exempt,name='dispatch')
# class mbtiRcm(View):
#     def get(self, request):
#         get_mbti = request.GET.get('mbti')
#         print(get_mbti)
#
#         job_list = randomRCM() ####여기에 추천 모듈 넣기
#         # JSON 형식으로 response
#         return  JsonResponse({
#             'job_list' : job_list,
#         }) # 한글 등의 유니코드는 16진수로 표현될 경우 : 두번째 파라미터로 json_dumps_params = {'ensure_ascii': False} 추가
#
#
# @method_decorator(csrf_exempt,name='dispatch')
# class persRcm(View):
#     def get(self, request):
#         get_user = request.GET.get('username')
#         job_list = randomRCM()  ####여기에 추천 모듈 넣기
#         print(get_user)
#         # JSON 형식으로 response
#         return  JsonResponse({
#             'job_list' : job_list,
#         }) # 한글 등의 유니코드는 16진수로 표현될 경우 : 두번째 파라미터로 json_dumps_params = {'ensure_ascii': False} 추가
#
#
# @csrf_exempt
# def postings(request):
#     if request.method == 'POST':
#         code = request.POST.get('code')
#         si = request.POST.get('si')
#         gu = request.POST.get('gu')
#
#         qs = JobPosting.objects.filter(sub_code=code,city=si,county=gu)
#         post_list = serializers.serialize('json', qs)
#         print(post_list)
#         return HttpResponse(post_list, content_type="text/json-comment-filtered")