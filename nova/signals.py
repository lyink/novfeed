from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver
from .models import GalleryImage
from .utils import create_thumbnail, optimize_image

@receiver(pre_save, sender=GalleryImage)
def optimize_gallery_image(sender, instance, **kwargs):
    """
    Signal to optimize and create thumbnails for gallery images before saving
    """
    # Check if this is a new image (no ID yet) or the image field has changed
    if not instance.pk or \
       (instance.pk and GalleryImage.objects.filter(pk=instance.pk).exists() and \
        GalleryImage.objects.get(pk=instance.pk).image != instance.image):
        optimize_image(instance)


@receiver(post_save, sender=GalleryImage)
def ensure_thumbnail_exists(sender, instance, created, **kwargs):
    """
    Signal to ensure thumbnails exist after saving
    This is a safety measure in case the optimization didn't create thumbnails
    """
    if not instance.thumbnail and instance.image:
        create_thumbnail(instance)
        instance.save(update_fields=['thumbnail'])