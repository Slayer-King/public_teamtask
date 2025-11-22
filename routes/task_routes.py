from flask import Blueprint, request, jsonify
from database import db
from models.task import Task
from datetime import datetime

task_routes = Blueprint('task_routes', __name__)

@task_routes.route('/tasks', methods=['POST'])
def add_task():
    task = request.get_json()
    print("Received task data:", task)  # Debugging line
    
    return jsonify({
        "message": "Task received",
        "task": task
        }), 201