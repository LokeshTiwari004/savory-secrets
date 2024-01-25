from flask import Flask, send_from_directory, make_response
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__, static_folder='../client/build')
cors = CORS(app)
app.config['CORS_HEADERS'] = "*/*"

# asset = open('../client/build/asset-manifest.json', 'r')
# asset = json.load(asset)

home_page =  open('./templates/home.json', 'r')
about_page =  open('./templates/about.json', 'r')

@app.route('/api/endpoint')
@cross_origin()
def test():
  return {"v": "HaaHaa"}

@app.route("/api/home-page")
@cross_origin()
def home():
  return home_page, 200


if __name__ == "__main__":
  app.run(debug=True)