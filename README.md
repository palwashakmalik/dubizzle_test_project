# Dubizzle and BAYUT Articles App


[![N|Solid](https://cnn-arabic-images.cnn.io/cloudinary/image/upload/w_1920,c_scale,q_auto/cnnarabic/2020/06/02/images/156205.jpg)](https://cnn-arabic-images.cnn.io/cloudinary/image/upload/w_1920,c_scale,q_auto/cnnarabic/2020/06/02/images/156205.jpg)

This application is built with Django on the backend and React with TypeScript and Material-UI on the frontend. It fetches articles and displays them.

## Prerequisites

Ensure you have the following installed:

- Python (version Python 3.9.0)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/palwashakmalik/dubizzle_test_project.git
2. **Navigate to the project directory:**
    ```sh
    cd dubizzle_test_project
    git checkout dev
    ```

3. **Create a virtual environment:**
    ```sh
    python -m venv venv
    ```

4. **Activate the virtual environment:**
    ```sh
    source venv/bin/activate
    ```
5. **Apply migrations:**
    ```sh
    cd news_site
    ```
6. **Set up the environment variables:**

    Create a .env file in the news_site directory with the following content:
        ```
        NEWS_API_BASE_URL=https://newsapi.org/v2/everything
        NEWS_API_KEY=5183fc4352d84e5f898c23935465b514
        SECRET_KEY=your_secret_key
        ```

7. **Migrate the database:**
    ```sh
    python manage.py migrate
    ```
8. **Run the server:**
    ```sh
    python manage.py runserver
    ```
Open your browser and navigate to http://localhost:8000.

Open another Terminal and navigate to the project directory

```
cd front-end
```
Now follow the README.md file in front-end folder