from django.http  import HttpResponse
from django.shortcuts import render
from django.conf import settings
from .forms import ContactForm
from django.core.mail import EmailMessage
from django.shortcuts import redirect
from django.template.loader import get_template

from .models import AboutUs,Contact,Welcome,Background,Security,Project,Values,Mission,Service
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


# def contact(request):

#     contacts =Contact.get_contact()
#     return render(request, 'all-netpro4G/contact.html', {"contacts":contacts})   

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

def mission(request):
    
    missions = Mission.get_missions()
    return render(request, 'all-netpro4G/missions.html', {"missions":missions})     
def service(request):
    services = Service.get_services()
    return render(request, 'all-netpro4G/service.html', {"services":services}) 

def service1(request):
    
    services = Service.get_services()
    return render(request, 'all-netpro4G/service1.html', {"services":services})

def service2(request):
    
    return render(request, 'all-netpro4G/service2.html')
    
def service3(request):
    
    return render(request, 'all-netpro4G/service3.html')                   

def contact(request):
    form_class = ContactForm

    if request.method == 'POST':
        form = form_class(data=request.POST)

        if form.is_valid():
            contact_name = request.POST.get(
                'contact_name'
            , '')
            contact_email = request.POST.get(
                'contact_email'
            , '')
            form_content = request.POST.get('content', '')

            # Email the profile with the
            # contact information
            template = get_template('contact_template.txt')
            context = {
                'contact_name': contact_name,
                'contact_email': contact_email,
                'form_content': form_content,
            }
            content = template.render(context)

            email = EmailMessage(
                "New contact form submission",
                content,
                "Your website" +'',
                ['bayizerechristine@gmail.com'],
                headers = {'Reply-To': contact_email }
            )
            email.send()
            return redirect('contact')

    return render(request, 'all-netpro4G/contact.html', {
        'form': form_class,
    })