from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'This is the Backend Server Running in the backend'


if __name__ == '__main__':
    app.run()
