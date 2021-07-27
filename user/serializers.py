from rest_framework import serializers

from .models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        # 'username' 추가
        fields = ('email','username','first_name', 'last_name','last_login','date_joined','is_staff')