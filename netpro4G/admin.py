
from django.contrib import admin
# Register your models here.

from .models import AboutUs,Contact,Welcome,Background,Security,Project,Values,Mission,Service

admin.site.register(AboutUs)
admin.site.register(Contact)

admin.site.register(Welcome)
admin.site.register(Background)
admin.site.register(Security)
admin.site.register(Project)
admin.site.register(Values)
admin.site.register(Mission)
admin.site.register(Service)