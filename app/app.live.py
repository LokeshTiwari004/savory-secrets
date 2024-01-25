from flask import Flask, send_from_directory, make_response
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__, static_folder='../client/build')
# cors = CORS(app)
# app.config['CORS_HEADERS'] = "*/*"

asset = open('../client/build/asset-manifest.json', 'r')
asset = json.load(asset)

home_page =  open('./templates/home.json', 'r')
about_page =  open('./templates/about.json', 'r')


@app.route("/")
def index():
  return make_response(send_from_directory(app.static_folder, 'index.html'), 200)

@app.route(asset['files']['main.js'])
def main():
  return make_response(send_from_directory(app.static_folder, asset['entrypoints'][0]), 200)

@app.route(asset['files']["main.a728e868.js.map"])
def mainMap():
  return make_response(send_from_directory(app.static_folder, asset['files']['main.a728e868.js.map'][1:]), 200)


if __name__ == "__main__":
  app.run(debug=True)