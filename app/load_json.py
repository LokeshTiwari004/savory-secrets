import json

def load_json(url):
  return json.load(open(url, 'r'))
