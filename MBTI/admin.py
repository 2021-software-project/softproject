# Register your models here.
from django.contrib import admin
from MBTI.modules.db.models import Post, User

admin.site.register(Post)
admin.site.register(User)

