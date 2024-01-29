import base64
import os
from flask import Flask, make_response, jsonify, send_file, send_from_directory
from flask_cors import CORS  #, cross_origin
# from load_json import load_json

app = Flask(__name__)
cors = CORS(app, resources={
  r"/api/*": {
    "origins": "http://localhost:3000"
  }
})

_home_page = "./static/home.json"
_about_page = "./static/about.json"
_food_image = "./assets/food.png"
if os.path.isFile(_food_image):
  with open(_food_image, 'rb') as img_file:
    _food_image = jsonify({
      "success": 1,
      "image": base64.b64encode(img_file).decode('utf-8')})
else:
  _food_image = jsonify({"success": 0})

@app.route("/api/home-page")
def home_page():
  # return _home_page, 200
  return send_file(_home_page), 200

@app.route("/api/about-page")
def about_page():
  return send_file(_about_page), 200

@app.route("/api/food-image")
def food_image():
  return _food_image, 200


if __name__ == "__main__":
  app.run(debug=True)