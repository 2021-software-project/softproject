from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from user.forms import UserForm

@csrf_exempt
def signup(request):
    """
    계정 생성
    """
    if request.method == "POST":
        form = UserForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return render(request, 'user/join_success.html')
        else:
            return render(request, 'user/signup.html', {'form': form})
    else:
        return render(request, 'user/signup.html')




