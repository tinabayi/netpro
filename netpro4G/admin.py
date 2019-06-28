
from django.contrib import admin
# Register your models here.

from .models import AboutUs,Contact

admin.site.register(AboutUs)
admin.site.register(Contact)
