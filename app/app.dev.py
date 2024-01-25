from flask import Flask, make_response, jsonify
from flask_cors import CORS  #, cross_origin
from load_json import load_json

app = Flask(__name__, static_folder='../client/build')
cors = CORS(app, resources={
  r"/api/*": {
    "origins": "http://localhost:3000"
  }
})

home_page = load_json("./templates/home.json")
about_page = load_json("./templates/about.json")

@app.route('/api/endpoint')
def test():
  return jsonify({"v": "HaaHaa"}), 200

@app.route("/api/home-page")
def home():
  return home_page, 200

@app.route("/api/about-page")
def about():
  return about_page, 200


if __name__ == "__main__":
  app.run(debug=True)