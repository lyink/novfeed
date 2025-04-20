import os
from io import BytesIO
from PIL import Image
from django.core.files.base import ContentFile
from django.conf import settings

def create_thumbnail(instance, size=(300, 200)):
    """
    Create a thumbnail for a GalleryImage instance
    
    Args:
        instance: GalleryImage instance
        size: Tuple with (width, height) for the thumbnail
        
    Returns:
        None (modifies the instance directly)
    """
    # If there's no image, return
    if not instance.image:
        return
    
    # If the thumbnail field already has a value, return
    if instance.thumbnail:
        return
    
    # Open the image
    image = Image.open(instance.image)
    
    # Convert to RGB if the image mode is not RGB
    if image.mode not in ('L', 'RGB', 'RGBA'):
        image = image.convert('RGB')
    
    # Create a thumbnail
    image.thumbnail(size, Image.LANCZOS)
    
    # Get the file extension
    filename = os.path.basename(instance.image.name)
    name, ext = os.path.splitext(filename)
    
    # Save the thumbnail
    thumb_name = f"{name}_thumb{ext}"
    temp_thumb = BytesIO()
    image.save(temp_thumb, format='JPEG' if ext.lower() != '.png' else 'PNG')
    temp_thumb.seek(0)
    
    # Save the thumbnail to the instance
    instance.thumbnail.save(thumb_name, ContentFile(temp_thumb.read()), save=False)
    
    # Close the BytesIO object
    temp_thumb.close()


def optimize_image(instance, quality=85, max_size=(1200, 800)):
    """
    Optimize an image by resizing and compressing it
    
    Args:
        instance: GalleryImage instance
        quality: JPEG compression quality (1-100)
        max_size: Maximum size (width, height) for the image
        
    Returns:
        None (modifies the instance directly)
    """
    # If there's no image, return
    if not instance.image:
        return
    
    # Open the image
    image = Image.open(instance.image)
    
    # Check if optimization is needed
    if image.width <= max_size[0] and image.height <= max_size[1]:
        # Create thumbnail but don't resize the main image
        create_thumbnail(instance)
        return
    
    # Convert to RGB if the image mode is not RGB
    if image.mode not in ('L', 'RGB', 'RGBA'):
        image = image.convert('RGB')
    
    # Resize the image while maintaining aspect ratio
    image.thumbnail(max_size, Image.LANCZOS)
    
    # Get the file extension
    filename = os.path.basename(instance.image.name)
    name, ext = os.path.splitext(filename)
    
    # Save the optimized image
    temp_image = BytesIO()
    image.save(temp_image, format='JPEG' if ext.lower() != '.png' else 'PNG', 
               quality=quality, optimize=True)
    temp_image.seek(0)
    
    # Save the optimized image back to the instance
    instance.image.save(filename, ContentFile(temp_image.read()), save=False)
    
    # Close the BytesIO object
    temp_image.close()
    
    # Now create the thumbnail
    create_thumbnail(instance)


def clean_unused_images():
    """
    Clean unused images from the media directory
    This function removes images that are no longer referenced by any GalleryImage instance
    
    Note: This function should be used with caution, preferably in a management command
    """
    from .models import GalleryImage
    
    # Get all image paths from the database
    used_images = set()
    for gallery_image in GalleryImage.objects.all():
        if gallery_image.image:
            used_images.add(gallery_image.image.path)
        if gallery_image.thumbnail:
            used_images.add(gallery_image.thumbnail.path)
    
    # Get all image files from the media directory
    gallery_dir = os.path.join(settings.MEDIA_ROOT, 'gallery')
    if not os.path.exists(gallery_dir):
        return
    
    for root, dirs, files in os.walk(gallery_dir):
        for file in files:
            file_path = os.path.join(root, file)
            if file_path not in used_images:
                try:
                    os.remove(file_path)
                    print(f"Removed unused file: {file_path}")
                except Exception as e:
                    print(f"Error removing file {file_path}: {e}")