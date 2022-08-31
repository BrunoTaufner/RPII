from flask import Flask
import controller

app = Flask(__name__)

@app.route("/")
def homepage():
    return "This is the home page !"

if __name__ == "__main__":
    app.run(debug=True)