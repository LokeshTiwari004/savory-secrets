import base64
import os
from flask import Flask, make_response, jsonify, send_file, send_from_directory
from flask_cors import CORS  #, cross_origin

app = Flask(__name__)
CORS(app)
cors = CORS(app, resources={
  r"/api/*": {
    "origins": "http://192.168.0.200:3000"
  }
  # r"/api/*": {
  #   "origins": "http://192.168.0.*:*"
  # }
})

_home_page = "../static/home.json"
_about_page = "../static/about.json"
_food_image = "../assets/food.png"

@app.route("/api/home-page")
def home_page():
  return send_file(_home_page), 200

@app.route("/api/about-page")
def about_page():
  return send_file(_about_page), 200

@app.route("/api/food-image")
def food_image():
  return send_file(_food_image), 200


if __name__ == "__main__":
  # app.run(debug=True)
  app.run(host="192.168.0.200", port=5000, debug=True, threaded=True)