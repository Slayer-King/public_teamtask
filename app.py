from flask import Flask
from flask_cors import CORS
from config import Config
from database import db
from routes.task_routes import task_routes

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    
    CORS(app)
    db.init_app(app)
    
    app.register_blueprint(task_routes)
    
    return app

# 👇 ESTA LÍNEA ES LA QUE HACE FALTA PARA RENDER / GUNICORN
app = create_app()

if __name__ == "__main__":
    app.run(debug=True)
