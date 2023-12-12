"""news_site URL Configuration
"""
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('', include('news_app.urls')),
    path('admin/', admin.site.urls),
]