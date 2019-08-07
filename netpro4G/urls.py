from django.conf.urls import url
from . import views
from django.conf import settings
from django.conf.urls.static import static
urlpatterns=[
    url('^$',views.welcome,name = 'welcome'),
    url(r'^NETPROLTD/home$',views.home,name = 'home'),
    url(r'^NETPROTLD/contact$',views.contact,name = 'contact'),
    url(r'^NETPROTLD/services$',views.service,name = 'service'),
    url(r'^NETPROLTD/background$',views.background,name = 'background'),
    url(r'^NETPROLTD/security$',views.security,name = 'security'),
    url(r'^NETPROLTD/values$',views.values,name = 'values'),
    url(r'^NETPROLTD/Missions$',views.mission,name = 'mission'),
    url(r'^NETPROLTD/service1$',views.service1,name = 'service1'),
    url(r'^NETPROLTD/service2$',views.service2,name = 'service2'),
    url(r'^NETPROLTD/service3$',views.service3,name = 'service3'),
    url(r'^NETPROLTD/project$',views.project,name = 'project'),
]
if settings.DEBUG:
    urlpatterns+= static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT) 