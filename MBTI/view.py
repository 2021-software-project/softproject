from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.contrib import messages


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

@csrf_exempt
def join(request):
    if request.method == "POST":
        join_id = request.POST['id']
        join_pw = request.POST['pw']
        name = request.POST['name']
        gender = request.POST.get('gender')  #get() 해주니까 MultiValueDictKeyError 해결됨
        #mbti = request.POST['mbti']
        #area1 = request.POST['area1']
        #area2 = request.POST['area2']
        #area3 = request.POST['area3']
        print("사용자 입력 ID :",join_id)
        print("사용자 입력 Password :", join_pw)
        print("사용자 입력 name:",name)

        # id 중복 확인
        key = User.objects.filter(id = join_id)
        print(key)

        if key == None:
            print("아이디를 입력해주세요")
            messages.info(request, '아이디를 입력해주세요')
            return render(request, "MBTI/user/join.html")
        elif key :
            #회원 객체 생성
            print("중복된 ID입니다")
            messages.info(request, '중복된 ID입니다')
            return render(request, "MBTI/user/join.html")
        else:
            print("")
            User.objects.create(id=join_id, pw=join_pw, name=name, gender=gender)
                                #mbti=mbti, area1=area1, area2=area2, area3=area3)
            return render(request, "MBTI/login.html")
    else:
        return render(request, "MBTI/user/join.html")

def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)

def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)