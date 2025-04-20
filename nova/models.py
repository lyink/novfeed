from django.db import models

# Create your models here.
from django.db import models
from django.utils import timezone
from django.urls import reverse
from django.contrib.auth.models import User
from django.utils.text import slugify

class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=120, unique=True)
    description = models.TextField(blank=True)
    
    class Meta:
        verbose_name_plural = 'Categories'
        ordering = ['name']
    
    def __str__(self):
        return self.name
        
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)
    
    def get_absolute_url(self):
        return reverse('category', args=[self.slug])


class Tag(models.Model):
    name = models.CharField(max_length=50)
    slug = models.SlugField(max_length=70, unique=True)
    
    class Meta:
        ordering = ['name']
    
    def __str__(self):
        return self.name
        
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)
    
    def get_absolute_url(self):
        return reverse('tag', args=[self.slug])


class Post(models.Model):
    STATUS_CHOICES = (
        ('draft', 'Draft'),
        ('published', 'Published'),
    )
    
    title = models.CharField(max_length=250)
    slug = models.SlugField(max_length=270, unique_for_date='publish')
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='blog_posts')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='posts')
    tags = models.ManyToManyField(Tag, blank=True, related_name='posts')
    featured_image = models.ImageField(upload_to='blog/images/%Y/%m/%d/', blank=True, null=True)
    summary = models.CharField(max_length=300, help_text='A brief summary of the post')
    content = models.TextField()
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='draft')
    
    publish = models.DateTimeField(default=timezone.now)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    
    featured = models.BooleanField(default=False, help_text='Mark as featured post')
    views = models.PositiveIntegerField(default=0)
    
    class Meta:
        ordering = ['-publish']
        indexes = [
            models.Index(fields=['-publish']),
        ]
    
    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)
    
    def get_absolute_url(self):
        return reverse('post_detail', 
                       args=[self.publish.year,
                             self.publish.month,
                             self.publish.day,
                             self.slug])
    
    def increment_views(self):
        self.views += 1
        self.save(update_fields=['views'])


class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    name = models.CharField(max_length=80)
    email = models.EmailField()
    body = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=True)
    
    class Meta:
        ordering = ['created']
        indexes = [
            models.Index(fields=['created']),
        ]
    
    def __str__(self):
        return f'Comment by {self.name} on {self.post}'
    
from django.db import models
from django.utils import timezone
from django.db.models.signals import pre_save
from django.dispatch import receiver
from django.utils.text import slugify
from django.db import models
from .utils import optimize_image

class GalleryImage(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, max_length=250, blank=True)
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='gallery/')
    thumbnail = models.ImageField(upload_to='gallery/thumbnails/', blank=True, null=True)
    order = models.PositiveIntegerField(default=0, help_text="Order of the image in the gallery")
    created = models.DateTimeField(default=timezone.now)
    is_featured = models.BooleanField(default=False)
    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        # Generate slug if not provided
        if not self.slug:
            self.slug = slugify(self.title)
            
            # Ensure uniqueness of slug
            original_slug = self.slug
            counter = 1
            while GalleryImage.objects.filter(slug=self.slug).exists():
                self.slug = f"{original_slug}-{counter}"
                counter += 1
        
        super().save(*args, **kwargs)

    class Meta:
        verbose_name = 'Gallery Image'
        verbose_name_plural = 'Gallery Images'
        ordering = ['order', '-created']

# Signal to optimize image and create thumbnail before saving
@receiver(pre_save, sender=GalleryImage)
def optimize_gallery_image(sender, instance, **kwargs):
    """
    Optimize the image and create a thumbnail before saving
    """
    # Only optimize if the image is being added or modified
    if instance.pk is None or 'image' in instance.get_dirty_fields():
        optimize_image(instance)


# models.py
from django.db import models
from django.utils import timezone

class Enquiry(models.Model):
    PRODUCT_CHOICES = [
        ('novafeed-protein', 'novafeed Protein'),
        ('ecovita', 'EcoVita'),
        ('other', 'Other'),
    ]
    
    SERVICE_CHOICES = [
        ('feasibility', 'Feasibility Studies'),
        ('technology', 'Technology Transfer'),
        ('consulting', 'On-site Consulting'),
        ('data', 'Data-Driven Farming'),
        ('other', 'Other'),
    ]
    
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    company = models.CharField(max_length=100, blank=True)
    product_interest = models.CharField(max_length=50, choices=PRODUCT_CHOICES, blank=True)
    service_interest = models.CharField(max_length=50, choices=SERVICE_CHOICES, blank=True)
    country = models.CharField(max_length=100, blank=True)
    message = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)
    is_read = models.BooleanField(default=False)
    
    def __str__(self):
        return f"Enquiry from {self.name} - {self.created_at.strftime('%Y-%m-%d')}"
    
    class Meta:
        verbose_name = "Enquiry"
        verbose_name_plural = "Enquiries"
        ordering = ['-created_at']