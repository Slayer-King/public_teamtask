from database import db
from datetime import datetime

class Task(db.Model):
    __tablename__ = 'tasks'
    
    id = db.Column(db.Integer, primary_key=True)
    
    title = db.Column(db.String(150), nullable=False)
    description = db.Column(db.Text, nullable=True)
    
    status = db.Column(
        db.String(50),
        nullable=False,
        default='pending'
    )
    
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    complete_at = db.Column(db.DateTime, nullable=True)
    
    project_id = db.Column(
        db.Integer,
        db.ForeignKey('projects.id'),
        nullable=True
    )
    user_id = db.Column(
        db.Integer,
        db.ForeignKey('users.id'),
        nullable=True
    )
    
    project_id = db.relationship('Project', backref=db.backref('tasks'))
    user_id = db.relationship('User')
    
    def to_json(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "status": self.status,
            "created_at": str(self.created_at),
            "completed_at": str(self.completed_at) if self.completed_at else None,
            "project_id": self.project_id,
            "user_id": self.user_id
        }