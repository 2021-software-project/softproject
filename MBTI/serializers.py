

from rest_framework import serializers
#from MBTI.models import Product
from  MBTI.modules.db.models import Product
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'