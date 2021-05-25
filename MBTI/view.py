from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.contrib import messages
from MBTI.modules.db.models import User, Product

# Create your views here.
from rest_framework import viewsets
from serializers import ProductSerializer
#from .models import Product

class ProductView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()



@csrf_exempt
def login(request):
    if request.method == "GET":
        print("로그인 접속")
    elif request.method == "POST":
        id = request.POST['id']
        pw = request.POST['password']
        print("사용자 입력 ID :",id)
        print("사용자 입력 Password :", pw)
    return render(request, "MBTI/user/login.html")

def index(request):
    if request.method == "GET":
        return render(request, "MBTI/index.html")

@csrf_exempt
def join(request):
    if request.method == "POST":
        join_id = request.POST['id']
        join_pw = request.POST['pw']
        join_pw_check = request.POST['pw2']
        name = request.POST['name']
        gender = request.POST.get('gender')  #get() 해주니까 MultiValueDictKeyError 해결됨
        print("사용자 입력 ID :",join_id)
        print("사용자 입력 Password :", join_pw)
        print("사용자 입력 name:",name)

        # id 중복 확인
        key = User.objects.filter(id = join_id)
        print(key)

        if key :
            #회원 객체 생성
            print("중복된 ID입니다")
            messages.info(request, '중복된 ID입니다')
            return render(request, "MBTI/user/join.html")
        else:
            if join_pw != join_pw_check:
                messages.info(request, '비밀번호를 확인해주세요')
                return render(request, "MBTI/user/join.html")
            else:
                print("회원가입 성공")
                messages.info(request, '회원가입을 축하드립니다!')
                User.objects.create(id=join_id, pw=join_pw, name=name, gender=gender)
                return render(request, "MBTI/user/join_success.html")
    else:
        return render(request, "MBTI/user/join.html")
@csrf_exempt
def join2(request):
    if request.method == "POST":
        print("개인정보 추가")
        return render(request, "MBTI/user/join2.html")
@csrf_exempt
def main(request):
    if request.method == "POST":
        print("메인화면 접속")
        id = request.POST['id']
        data = {
            'id': id,
        }

        return render(request, "MBTI/main.html", data)

def join_success(request):
    return render(request, "MBTI/user/join_success.html")

def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)

def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)