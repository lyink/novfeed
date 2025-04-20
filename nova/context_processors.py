from .models import Category, Post

def categories(request):
    """
    Add all categories to context for global sidebar access
    """
    return {
        'categories': Category.objects.all()
    }

def recent_posts(request):
    """
    Add recent posts to context for global sidebar access
    """
    return {
        'recent_posts': Post.objects.filter(status='published').order_by('-publish')[:5]
    }