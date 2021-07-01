from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin
from django.utils import timezone
from django.utils.translation import ugettext_lazy as _

class UserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError('The given email must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_staff',True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, password, **extra_fields)


class CustomUser(AbstractBaseUser, PermissionsMixin):
    """
    customized User
    """
    email = models.EmailField(
        verbose_name=_('email id'),
        max_length=64,
        unique = True,
        help_text = 'EMAIL ID',
    )
    username = models.CharField(
        max_length=30,
    )
    is_staff = models.BooleanField(
        _('staff status'),
        default = False,
        help_text=_('Designates whether the user can log into this admin site.'),
    )
    is_active = models.BooleanField(
        _('active'),
        default=True,
        help_text=_(
            'Designates whether this user should be treated as active. '
            'Unselect this instead of deleting accounts.'
        ),
    )
    date_joined = models.DateTimeField(_('date joined'), default = timezone.now())

    objects = UserManager()

    # 고유식별자로 사용되는 사용자 모델의 필드 이름을 설명하는 문자열.
    # 일반적으로 사용자의 이름이지만 email 주소 또는 다른 고유 식별자로 지정 가능
    EMAIL_FIELD = 'email'
    USERNAME_FIELD = 'email'

    # class Meta : Inner class 로 사용하여 상위 클래스에게 meta data를 제공하는 것.
    class Meta:
        # 사용자가 읽기 쉬운 객체의 이름으로 관리자 화면에서 표시되는 이름 지정
        verbose_name = _('user')
        # verbose_name과 동일하나 복수 명칭 지정
        verbose_name_plural = _('user')

    # __str__ : 해당 클래스로 만들어진 인스턴스를 자체 출력할 때, 문자열로 설명하기 위한 메소드
    # 인스턴스에 이름을 부여하여 알아보기 편하게 하기 위함
    def __str__(self):
        return self.username

    def get_short_name(self):
        return self.email

    def get_username(self):
        return self.username