from django.test import TestCase
from rest_framework.test import APIRequestFactory
from .views import news_articles_view
from unittest.mock import patch
import os


class NewsAPITest(TestCase):
    def setUp(self):
        self.factory = APIRequestFactory()

    def test_news_articles_view(self):
        # Test case 1: All parameters provided
        request = self.factory.get(
            '/news', {'q': 'netflix', 'from': "2023-12-10", 'sortBy': 'publishedAt', 'language': 'en', 'page':'1', 'pageSize': '100'})
        response = news_articles_view(request)
        print(response)
        self.assertEqual(response.status_code, 200)

        # Test case 2: Missing some parameters
        request = self.factory.get('/news', {'q': 'google', 'language': 'en'})
        response = news_articles_view(request)
        self.assertEqual(response.status_code, 200)

        # Test case 3: Missing all parameters
        request = self.factory.get('/news')
        response = news_articles_view(request)
        self.assertEqual(response.status_code, 500)

    @patch.dict(os.environ, {'NEWS_API_KEY': '12345'})
    # Test case 4: Wrong API key
    def test_wrong_api_key(self):
        request = self.factory.get('/news', {'q': 'netflix', 'language': 'en'})
        response = news_articles_view(request)
        self.assertEqual(response.status_code, 500)
