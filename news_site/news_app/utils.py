import requests
import os
from django.http import JsonResponse


def get_news_articles(params):
    base_url = os.environ.get('NEWS_API_BASE_URL')
    params["apiKey"] = os.environ.get('NEWS_API_KEY')
    response = requests.get(base_url, params=params)
    if response.status_code == 200:
        data = response.json()
        return JsonResponse({"data": data}, status=200)
    else:
        return JsonResponse({"error": "Failed to fetch data"}, status=500)
