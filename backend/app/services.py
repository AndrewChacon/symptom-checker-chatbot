import openai
import os

# Load the API key from the environment
openai.api_key = os.getenv("OPENAI_API_KEY")

def process_user_input(user_input):
    # Define the prompt for ChatGPT API
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": user_input}]
    )
    return response['choices'][0]['message']['content']
