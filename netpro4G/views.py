from django.http  import HttpResponse
from django.shortcuts import render
# Create your views here.
def welcome(request):
    return render(request, 'all-netpro4G/welcome.html')


    