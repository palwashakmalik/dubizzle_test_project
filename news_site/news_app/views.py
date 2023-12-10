from django.shortcuts import render
from datetime import datetime
from .utils import get_news_articles

def news_articles_view(request):
    search_text = request.GET.get('q', 'netflix')
    today_date = datetime.now().date().isoformat()
    from_date = request.GET.get('from', today_date)
    sort_by = request.GET.get('sortBy', 'publishedAt')
    language = request.GET.get('language', 'en')
    data = get_news_articles(search_text, from_date, sort_by, language)
    return render(request, "news_articles.html", {"data": data})
