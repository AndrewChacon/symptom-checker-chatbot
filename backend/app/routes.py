from flask import Blueprint, request, jsonify, render_template, current_app
from .services import process_user_input  # Import service functions
import openai

main_routes = Blueprint('main', __name__)


@main_routes.route('/')
def home():
    return render_template('home.html')

@main_routes.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_message = data.get("message")

    if not user_message:
        return jsonify({"error": "Message is required"}), 400

    try:
        openai.api_key = current_app.config["OPENAI_API_KEY"]
        response = openai.Completion.create(
            model="text-davinci-003",
            prompt=f"User: {user_message}\nChatbot:",
            max_tokens=150,
            temperature=0.7,
            n=1,
            stop=["User:", "Chatbot:"]
        )
        chatbot_message = response.choices[0].text.strip()
        return jsonify({"response": chatbot_message})

    except Exception as e:
        return jsonify({"error": str(e)}), 500