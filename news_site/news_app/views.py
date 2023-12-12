from django.shortcuts import render
from datetime import datetime
from .utils import get_news_articles
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
def news_articles_view(request):
    search_text = request.GET.get('q')
    from_date = request.GET.get('from')
    sort_by = request.GET.get('sortBy')
    language = request.GET.get('language')
    params = {
        key: value for key, value in {
            "q": search_text,
            "from": from_date,
            "sortBy": sort_by,
            "language": language,
        }.items() if value is not None
    }
    response = get_news_articles(params)
    return response
