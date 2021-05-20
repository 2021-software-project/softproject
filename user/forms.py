from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class UserForm(UserCreationForm):

    email = forms.EmailField(error_messages={
        'required' : '이메일을 입력하세요'
    }, label="이메일")

    class Meta:
        model = User
        fields = ("username","email");
