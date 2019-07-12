from django.db import models

# Create your models here.
class AboutUs(models.Model):
    title = models.CharField(max_length =60,null=True)
    post = models.TextField( null=True)
   
    def __str__(self):
        return self.title
    class Meta:
        ordering = ['title']

    def save_post(self):
        self.save()
    
    @classmethod
    def get_post(cls):
        post = cls.objects.all();
        return post

class Background(models.Model):
    background = models.TextField( null=True)

    def save_background(self):
        self.save()
    
    @classmethod
    def get_background(cls):
        background = cls.objects.all();
        return background        

class Contact(models.Model):
    title = models.CharField(max_length =60,null=True)
    location = models.CharField(max_length =60,null=True)
    phone = models.CharField(max_length =60,null=True)
    mailUs = models.CharField(max_length =60,null=True)
    website = models.CharField(max_length =60,null=True)
    def __str__(self):
        return self.title
    class Meta:
        ordering = ['title']

    def save_contact(self):
        self.save()
    @classmethod
    def get_contact(cls):
        contacts = cls.objects.all();
        return contacts


class Security(models.Model):
    title = models.CharField(max_length =60,null=True)
    security = models.TextField(null=True)
    
    
    def __str__(self):
        return self.title
    class Meta:
        ordering = ['title']

    def save_security(self):
        self.save()
    @classmethod
    def get_security(cls):
        security = cls.objects.all();
        return security

class Welcome(models.Model):
    title = models.CharField(max_length =60,null=True)
    welcome = models.TextField(null=True)
    
    def __str__(self):
        return self.title
    class Meta:
        ordering = ['title']

    def save_welcome(self):
        self.save()
    @classmethod
    def get_welcome(cls):
        welcomes = cls.objects.all();
        return welcomes      

class Project(models.Model):
    title = models.CharField(max_length =60,null=True)
    project= models.TextField(null=True)
    project_image = models.ImageField(upload_to = 'image/',null=True)
    def __str__(self):
        return self.title
    class Meta:
        ordering = ['title']

    def save_project(self):
        self.save()
    @classmethod
    def get_project(cls):
        projects = cls.objects.all();
        return projects             
class Values(models.Model):
    title = models.CharField(max_length =60,null=True)
    values= models.TextField(null=True)
   
    def __str__(self):
        return self.title
    class Meta:
        ordering = ['title']

    def save_values(self):
        self.save()
    @classmethod
    def get_values(cls):
        values = cls.objects.all();
        return values                    