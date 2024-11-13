from flask import Flask
from .routes import main_routes  # Import routes from routes.py
from .config import Config       # type: ignore # Import config settings

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    
    # Register Blueprints or routes
    app.register_blueprint(main_routes)

    return app
