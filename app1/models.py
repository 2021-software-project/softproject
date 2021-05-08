from django.conf import settings
from django.db import models
from django.utils import timezone

class Post(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    text = models.TextField()
    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title

class User(models.Model):

    GENDER_CHOICES={
        ('male','Male'),
        ('Female', 'Female'),
    }

    MBTI_CHOICES={
        ('istj', 'ISTJ'), ('isfj', 'ISFJ'), ('infj', 'INFJ'), ('intj', 'INTJ'),
        ('istp', 'ISTP'), ('isfp', 'ISFP'), ('infp', 'INFP'), ('intp', 'INTP'),
        ('estp', 'ESTP'), ('esfp', 'ESFP'), ('enfp', 'ENFP'), ('entp', 'ENTP'),
        ('estj', 'ESTJ'), ('esfj', 'ESFJ'), ('enfj', 'ENFJ'), ('entj', 'ENTJ'),
    }

    id = models.CharField(max_length=25,primary_key=True)
    pw = models.CharField(max_length=25)
    name = models.CharField(max_length=25)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    mbti = models.CharField(max_length=10,choices=MBTI_CHOICES)
    area1 = models.CharField(max_length=100, blank=True, null=True)
    area2 = models.CharField(max_length=100, blank=True, null=True)
    area3 = models.CharField(max_length=100, blank=True, null=True)

    # area1 = models.CharField(max_length=100,blank=True, null=True)
    # area2 = models.CharField(max_length=100,blank=True, null=True)
    # area3 = models.CharField(max_length=100,blank=True, null=True)

    def __str__(self):
        return self.id
