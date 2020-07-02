import requests
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

'''
The JS request is sent to this route.
It should have access to the base and symbol variables as a JSON object.
'''
@app.route('/convert', methods=['POST'])
def convert():
    base   = request.form["base"]
    symbol = request.form["symbol"]

