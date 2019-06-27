from django.db import models

# Create your models here.
class AboutUs(models.Model):
    title = models.CharField(max_length =60,null=True)
    post = models.TextField( null=True)
    post_image = models.ImageField(upload_to = 'image/',null=True)
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