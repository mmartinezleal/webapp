import requests
from fLask import Flask 


app = flask (__name__)

@app.route('/')
def consumeApi():
    url = 
    response = requests.get(url)
    return f"Response: {response.text}"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port= 8000)
