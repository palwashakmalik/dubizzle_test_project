import requests
import os
from django.http import JsonResponse

def get_news_articles(search_text, from_date, sort_by, language):
    base_url = os.environ.get('NEWS_API_BASE_URL')
    params = {
        "apiKey": os.environ.get('NEWS_API_KEY'),
        "q": search_text,
        "from": from_date,
        "sortBy": sort_by,
        "language": language,
    }
    response = requests.get(base_url, params=params)

    if response.status_code == 200:
        data = response.json()
        return JsonResponse({"data": data}, status=200)
    else:
        return JsonResponse({"error": "Failed to fetch data"}, status=500)