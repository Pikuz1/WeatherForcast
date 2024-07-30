from flask import Blueprint, request, jsonify
from flask_cors import CORS
from .weather_service import get_weather

main = Blueprint('main', __name__)
CORS(main)  # Enable CORS for the blueprint

@main.route('/weather', methods=['POST'])
def weather():
    data = request.get_json()
    date = data.get('date')
    location = data.get('location')
    weather_data = get_weather(date, location)
    return jsonify(weather_data)
