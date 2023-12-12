from django.urls import path
from . import views

urlpatterns = [
    path('news/', views.news_articles_view, name='news_articles'),
]