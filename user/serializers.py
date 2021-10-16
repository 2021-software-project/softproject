from rest_framework import serializers

from .models import CustomUser, UserMbti, UserRating, UserPostingLike

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        # 'username' 추가
        fields = ('email','username','first_name', 'last_name','last_login','date_joined','is_staff')

class UserMbtiSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserMbti
        fields = '__all__'

class UserRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserRating
        fields = '__all__'  #모델에서 설정한 모든 필드를 여기서도 설정해줌

class UserPostingLikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPostingLike
        fields = '__all__'