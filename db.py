DATABASES = {
    'default' : {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'mbti',
        'USER': 'root',
        'PASSWORD': ' ', # 비번 입력
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
SECRTET_KEY = 'secret-key' #혹시 이 부분때문에 안되면 현지에게 
