
from django.contrib import admin
# Register your models here.

from .models import AboutUs,Contact,Service,Welcome,Background

admin.site.register(AboutUs)
admin.site.register(Contact)
admin.site.register(Service)
admin.site.register(Welcome)
admin.site.register(Background)
