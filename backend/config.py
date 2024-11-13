import os
from dotenv import load_dotenv

load_dotenv()  # Load environment variables from .env file

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", "default_secret_key")
    OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
    # Add more configurations if needed
