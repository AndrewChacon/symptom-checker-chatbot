from flask import Blueprint, request, jsonify
from .services import process_user_input  # Import service functions

main_routes = Blueprint('main', __name__)

@main_routes.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_input = data.get("message", "")
    response = process_user_input(user_input)
    return jsonify({"response": response})
