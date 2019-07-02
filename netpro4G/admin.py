
from django.contrib import admin
# Register your models here.

from .models import AboutUs,Contact,Service

admin.site.register(AboutUs)
admin.site.register(Contact)
admin.site.register(Service)
