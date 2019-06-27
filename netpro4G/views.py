from django.http  import HttpResponse
from django.shortcuts import render
from .models import AboutUs
# Create your views here.
def welcome(request):
    return render(request, 'all-netpro4G/welcome.html')

def home(request):
    
    post =AboutUs.get_post()
    return render(request, 'all-netpro4G/home.html', {"post":post})   


    