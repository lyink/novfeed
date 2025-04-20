from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Category, Tag, Post, Comment

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ['name']


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ['name']


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['title', 'slug', 'author', 'category', 'publish', 'status', 'featured', 'views']
    list_filter = ['status', 'created', 'publish', 'author', 'category', 'featured']
    search_fields = ['title', 'content']
    prepopulated_fields = {'slug': ('title',)}
    raw_id_fields = ['author']
    date_hierarchy = 'publish'
    ordering = ['-publish']
    filter_horizontal = ['tags']
    list_editable = ['status', 'featured']
    
    def get_queryset(self, request):
        qs = super().get_queryset(request)
        if request.user.is_superuser:
            return qs
        return qs.filter(author=request.user)


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'post', 'created', 'active']
    list_filter = ['active', 'created', 'updated']
    search_fields = ['name', 'email', 'body']
    actions = ['approve_comments', 'disapprove_comments']
    
    def approve_comments(self, request, queryset):
        queryset.update(active=True)
    approve_comments.short_description = 'Approve selected comments'
    
    def disapprove_comments(self, request, queryset):
        queryset.update(active=False)
    disapprove_comments.short_description = 'Disapprove selected comments'

from django.contrib import admin
from django.utils.html import format_html
from .models import GalleryImage

from django.contrib import admin
from django.utils.html import format_html
from .models import GalleryImage

@admin.register(GalleryImage)
class GalleryImageAdmin(admin.ModelAdmin):
    list_display = ['title', 'image_preview', 'created']
    search_fields = ['title', 'description']
    list_filter = ['created']
    readonly_fields = ['image_preview_large', 'thumbnail_preview']
    
    fieldsets = (
        (None, {
            'fields': (
                'title', 
                'image', 
                'image_preview_large', 
                'description', 
                'thumbnail_preview'
            )
        }),
    )
    
    def image_preview(self, obj):
        if obj.thumbnail:
            return format_html(
                '<img src="{}" width="50" height="50" style="object-fit: cover;" />', 
                obj.thumbnail.url
            )
        elif obj.image:
            return format_html(
                '<img src="{}" width="50" height="50" style="object-fit: cover;" />', 
                obj.image.url
            )
        return "No Image"
    
    image_preview.short_description = 'Preview'
    
    def image_preview_large(self, obj):
        if obj.image:
            return format_html(
                '<img src="{}" width="400" style="max-height: 300px; object-fit: contain;" />', 
                obj.image.url
            )
        return "No Image"
    
    image_preview_large.short_description = 'Full Image Preview'
    
    def thumbnail_preview(self, obj):
        if obj.thumbnail:
            return format_html(
                '<img src="{}" width="200" style="max-height: 150px; object-fit: contain;" />', 
                obj.thumbnail.url
            )
        return "No Thumbnail"
    
    thumbnail_preview.short_description = 'Thumbnail Preview'

from django.contrib import admin
from .models import Enquiry

@admin.register(Enquiry)
class EnquiryAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'company', 'product_interest', 'service_interest', 'created_at', 'is_read')
    list_filter = ('product_interest', 'service_interest', 'is_read', 'created_at')
    search_fields = ('name', 'email', 'company', 'message')
    date_hierarchy = 'created_at'
    list_editable = ('is_read',)
    readonly_fields = ('created_at',)
    fieldsets = (
        ('Contact Information', {
            'fields': ('name', 'email', 'phone', 'company', 'country')
        }),
        ('Enquiry Details', {
            'fields': ('product_interest', 'service_interest', 'message')
        }),
        ('Status', {
            'fields': ('is_read', 'created_at')
        }),
    )