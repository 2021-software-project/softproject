from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

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

def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)

def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)