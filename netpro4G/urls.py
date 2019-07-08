from django.conf.urls import url
from . import views
from django.conf import settings
from django.conf.urls.static import static
urlpatterns=[
    url('^$',views.welcome,name = 'welcome'),
    url(r'^NETPROLTD/home$',views.home,name = 'home'),
    url(r'^NETPROTLD/contact$',views.contact,name = 'contact'),
    url(r'^NETPROTLD/services$',views.service,name = 'service'),
    url(r'^background$',views.background,name = 'background'),
]
if settings.DEBUG:
    urlpatterns+= static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT) 