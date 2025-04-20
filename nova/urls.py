from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
        path('contact', views.contact, name='contact'),
        path('about', views.about, name='about'),
        path('team', views.team, name='team'),
        path('products', views.products, name='products'),
        path('gallery', views.gallery, name='gallery'),
        path('research', views.research, name='research'),
        path('careers', views.careers, name='careers'),







            path('news', views.post_list, name='news'),
    # Alternative class-based list view
    # path('', views.PostListView.as_view(), name='post_list'),
    
    # Category and tag views
    path('category/<slug:category_slug>/', views.post_list, name='category'),
    path('tag/<slug:tag_slug>/', views.post_list, name='tag'),
    
    # Post detail view
    path('<int:year>/<int:month>/<int:day>/<slug:slug>/',
        views.post_detail,
        name='post_detail'),
    # Alternative class-based detail view
    # path('<int:year>/<int:month>/<int:day>/<slug:slug>/',
    #     views.PostDetailView.as_view(),
    #     name='post_detail'),
        path('technology/', views.technology_view, name='technology'),

    path('awards/', views.awards_view, name='awards'),
    path('search/', views.post_search, name='post_search'),
     path('gallery/category/<slug:category_slug>/', views.gallery, name='gallery_category'),
    path('gallery/image/<slug:image_slug>/', views.gallery_image_detail, name='gallery_image_detail'),
    path('enquire/', views.enquire, name='enquire'),
    path('enquiry-success/', views.enquiry_success, name='enquiry_success'),
]