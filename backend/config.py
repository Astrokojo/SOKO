from flask import Flask
from flask_cors import CORS
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

app = Flask(__name__)

# Initializes Cross Origin Resource sharing for the application. without it couldnt access different pages. Might want to ensure CSRF on the frontend forms
CORS(app)

# Set up Flask app to access database
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///soko.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Set the secret key
app.config['SECRET_KEY'] = 'f940fb9004521524be6a10b601baa522'


 # Create SQLALchemy engine to access database
engine = create_engine(app.config["SQLALCHEMY_DATABASE_URI"])

# Session maker binds any sessions created to the chosen db
Session = sessionmaker(bind=engine)

# Create a session
session = Session()

# Base calss for SQLAlchemy models
Base = declarative_base()
