# Register your models here.
from django.contrib import admin
from MBTI.modules.db.models import Post, User, Product

#from .models import Product

admin.site.register(Product)

admin.site.register(Post)
admin.site.register(User)

