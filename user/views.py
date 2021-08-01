# Create your views here.

#from rest_framework.decorators import api_view, permission_classes
#from rest_framework.permissions import AllowAny

#from user.serializers import UserCreateSerializer

#@api_view(['POST'])
#@permission_classes([AllowAny]) # 인증 필요없다
#def signup(request):
 #   serializer = UserCreateSerializer(data=request.data)
  #  if serializer.is_valid(raise_exception=True):
   #     serializer.save() # DB 저장
    #    return Response(serializer.data, status=201)
