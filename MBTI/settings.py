"""
Django settings for MBTI project.

Generated by 'django-admin startproject' using Django 3.2.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.2/ref/settings/
"""

from pathlib import Path
import db
import os, json
import datetime
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'MBTI.settings')
from django.core.exceptions import ImproperlyConfigured

BASE_DIR = Path(__file__).resolve().parent.parent

# secret 설정
secret_file = os.path.join(BASE_DIR, 'secrets.json')

with open(secret_file) as f:
    secrets = json.loads(f.read())

def get_secret(setting, secrets=secrets):
    try:
        return secrets[setting]
    except KeyError:
        error_msg = "Set the {} environment variable".format(setting)
        raise ImproperlyConfigured(error_msg)


SECRET_KEY = get_secret("SECRET_KEY")

# Django SMTP 설정
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
MAILER_EMAIL_BACKEND = EMAIL_BACKEND
EMAIL_HOST = 'smtp.gmail.com'                               # 메일 호스트 서버
EMAIL_PORT = 587                                            # gmail 과 통신하는 포트
EMAIL_HOST_USER = get_secret("EMAIL_HOST_USER")             # 사용할 host 이메일
EMAIL_HOST_PASSWORD = get_secret("EMAIL_HOST_PASSWORD")     # host 이메일 pwd
EMAIL_USE_TLS = True                                        # TLS 보안 설정
DEFAULT_FROM_EMAIL = EMAIL_HOST_USER

# from django.core.wsgi import get_wsgi_application
# application = get_wsgi_application()



# Build paths inside the project like this: BASE_DIR / 'subdir'.
STATICFILES_DIRS = (#추가해줌
    os.path.join(BASE_DIR,'frontend/build/static'),
)



# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# 0908 변경
ALLOWED_HOSTS = ["*"]

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'webpack_loader',
    'corsheaders',
    # app
    'MBTI',
    'user',
    # drf
    'rest_framework',
    'rest_framework.authtoken',
    'rest_framework_jwt',
    'rest_auth.registration',
    'rest_auth',
    # rest_auth + allauth
    'django.contrib.sites',
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'django_filters',  ##추가

]

AUTH_USER_MODEL = 'user.CustomUser'

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',#추가
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'MBTI.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': ['frontend/build'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'MBTI.wsgi.application'


DATABASES = db.DATABASES
# SECRET_KEY = db.SECRTET_KEY


# Password validation
# https://docs.djangoproject.com/en/3.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.2/howto/static-files/

STATIC_URL = '/static/'

# Default primary key field type
# https://docs.djangoproject.com/en/3.2/ref/settings/#default-auto-field

AUTHENTICATION_BACKENDS = (
	"django.contrib.auth.backends.ModelBackend",
)

REST_AUTH_SERIALIZERS = {
    'USER_DETAILS_SERIALIZER': 'user.serializers.UserSerializer',
}

REST_AUTH_REGISTER_SERIALIZERS = {
    'REGISTER_SERIALIZER': 'user.serializers.CustomRegisterSerializer'
}

#django sites app setting
SITE_ID = 1

ACCOUNT_EMAIL_REQUIRED = True

ACCOUNT_USERNAME_REQUIRED = False

ACCOUNT_SESSION_REMEMBER = True

ACCOUNT_AUTHENTICATION_METHOD = 'email'

ACCOUNT_UNIQUE_EMAIL = True
# 1014 추가
# 이메일 인증 설정 -> None : 이메일 인증을 하지 않아도 로그인 가능
ACCOUNT_EMAIL_VERIFICATION = 'none'

# DRF
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated', # 인증된 사용자만 접근 가능
        #'rest_framework.permissions.IsAdminUser', # 관리자만 접근 가능
        #'rest_framework.permissions.AllowAny', # 누구나 접근 가능
    ),
    'DEFAULT_RENDERER_CLASSES': (
        # 자동으로 json으로 바꿔줌
        'rest_framework.renderers.JSONRenderer',
        'rest_framework.renderers.BrowsableAPIRenderer',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES': (
        # 'rest_framework_jwt.authentication.JSONWebTokenAuthentication',
        'rest_framework.authentication.TokenAuthentication',
        'rest_framework.authentication.SessionAuthentication',
        # 'rest_framework.authentication.BasicAuthentication',
    ),
    'DEFAULT_FILTER_BACKENDS': ['django_filters.rest_framework.DjangoFilterBackend']
}

JWT_AUTH = {
    # add
    'JWT_SECRET_KEY': SECRET_KEY,
    'JWT_ALGORITHM': 'HS256', # 암호화 알고리즘
    'JWT_VERIFY_EXPIRATION' : True, #토큰검증
    'JWT_ALLOW_REFRESH': True, # refresh 사용 여부
    'JWT_EXPIRATION_DELTA': datetime.timedelta(days=7), # 유효기간 설정
    'JWT_REFRESH_EXPIRATION_DELTA': datetime.timedelta(days=28), # JWT 토큰 갱신 유효기간

}

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

CORS_ORIGIN_WHITELIST = [  # 추가
    'http://127.0.0.1:3000',
    'http://localhost:8000',
    'http://localhost:3000',
    'http://localhost:8080',
    'http://127.0.0.1:8000',
]

# 0908 CORS, CSRF 설정.
CORS_ALLOW_CREDENTIALS = True
CORS_ORIGIN_ALLOW_ALL = True
CORS_EXPOSE_HEADERS = (
    'Access-Control-Allow-Origin:*'
)
CSRF_COOKIE_NAME = "XCSRF-TOKEN"

