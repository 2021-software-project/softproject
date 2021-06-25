# Register your models here.
from django.contrib import admin
from MBTI.modules.db.models import Post, Product, Text


admin.site.register(Product)
admin.site.register(Text)

admin.site.register(Post)
# admin.site.register(User)

