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

    conversion_result = requests.get(f'https://api.exchangeratesapi.io/latest?base={base}&symbols={symbol}')

    if conversion_result.status_code != 200 :
        return jsonify({'success': False})

    return jsonify({'success': True, 'rates': conversion_result.json()['rates'][symbol]})



if __name__ == '__main__':
    app.run(debug=True)