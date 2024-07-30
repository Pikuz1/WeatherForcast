import requests
from urllib.parse import quote
from geopy.geocoders import Nominatim
geolocator = Nominatim(user_agent="GreenHeat")


def get_weather(date, location):
    # Get location coordinates
    location =  geolocator.geocode(location)
    
    date_quoted = quote(date)
    api_url = f"https://api.open-meteo.com/v1/forecast?latitude={location.latitude}&longitude={location.longitude}&hourly=temperature_2m&start={date_quoted}T00:00:00Z&end={date_quoted}T23:59:59Z"
    
    try:
        response = requests.get(api_url)
        response.raise_for_status()  # This will raise an HTTPError for bad responses
        weather_data = response.json()
        return weather_data
    except requests.exceptions.RequestException as e:
        print(f"Error fetching weather data: {e}")
        return {"error": "Error fetching weather data"}
