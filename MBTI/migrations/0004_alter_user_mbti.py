# Generated by Django 3.2.3 on 2021-06-01 00:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MBTI', '0003_auto_20210528_1443'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='mbti',
            field=models.CharField(blank=True, choices=[('enfp', 'ENFP'), ('infp', 'INFP'), ('entp', 'ENTP'), ('entj', 'ENTJ'), ('esfp', 'ESFP'), ('intj', 'INTJ'), ('infj', 'INFJ'), ('estp', 'ESTP'), ('estj', 'ESTJ'), ('isfp', 'ISFP'), ('isfj', 'ISFJ'), ('istj', 'ISTJ'), ('istp', 'ISTP'), ('esfj', 'ESFJ'), ('intp', 'INTP'), ('enfj', 'ENFJ')], max_length=10, null=True),
        ),
    ]