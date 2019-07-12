from django.http  import HttpResponse
from django.shortcuts import render
from .models import AboutUs,Contact,Welcome,Background,Security,Project,Values
# Create your views here.
def welcome(request):
    welcomes =Welcome.get_welcome()
    return render(request, 'all-netpro4G/welcome.html',{"welcomes":welcomes})

def home(request):
    
    post =AboutUs.get_post()
    return render(request, 'all-netpro4G/home.html', {"post":post})

def background(request):
    
    background = Background.get_background()
    return render(request, 'all-netpro4G/background.html', {"background":background})   


def contact(request):
    
    contacts =Contact.get_contact()
    return render(request, 'all-netpro4G/contact.html', {"contacts":contacts})   

def service(request):
    
    
    return render(request, 'all-netpro4G/service.html')   
def security(request):
    
    security =Security.get_security()
    return render(request, 'all-netpro4G/security.html', {"security":security})     

def project(request):
    
    projects =Project.get_project()
    return render(request, 'all-netpro4G/project.html', {"projects":projects})  
def values(request):
    
    values =Values.get_values()
    return render(request, 'all-netpro4G/values.html', {"values":values})         