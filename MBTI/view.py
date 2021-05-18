from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from app1.models import User
@csrf_exempt
def login(request):
    if request.method == "GET":
        print("로그인 접속")
    elif request.method == "POST":
        id = request.POST['id']
        pw = request.POST['password']
        print("사용자 입력 ID :",id)
        print("사용자 입력 Password :", pw)
    return render(request, "MBTI/login.html")

def index(request):
    if request.method == "GET":
        return render(request, "MBTI/index.html")

@csrf_exempt
def join(request):
    if request.method == "POST":
        join_id = request.POST['id']
        join_pw = request.POST['pw']
        name = request.POST['name']
        gender = request.POST['gender']
        mbti = request.POST['mbti']
        area1 = request.POST['area1']
        area2 = request.POST['area2']
        area3 = request.POST['area3']
        print("사용자 입력 ID :",join_id)
        print("사용자 입력 Password :", join_pw)
        print("사용자 입력 name:",name)
        print("사용자 입력 gender :", gender)
        print("사용자 입력 mbti :",mbti)
        print("사용자 입력 area1 :", area1)
        print("사용자 입력 area2 :", area2)
        print("사용자 입력 area3 :", area3)

        # 회원 객체 생성
        user = User()
        print(user)
        user.id = join_id
        user.pw = join_pw
        user.name = name
        user.gender = gender
        user.mbti = mbti
        user.area1 = area1
        user.area1 = area2
        user.area1 = area3
        user.save()
        return render(request, "MBTI/login.html")
    else:
        return render(request, "MBTI/user/join.html")
@csrf_exempt
def join2(request):
    if request.method == "GET":

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

def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)

def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)