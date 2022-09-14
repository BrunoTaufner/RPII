from flask import Flask, request
import controller
from controller import *

app = Flask(__name__)
Controller = Controller()

@app.route("/getong", methods=["GET"])
def get_all_ongs():
    """
    This methods returns a list of all ONGs from 
    ONGs public table.
    """

    return Controller.get_all_ongs()

@app.route("/getong/<id>", methods=["GET"])
def get_ong(id):
    """
    This method returns the ong with ong 
    """

    return Controller.get_ong(id)

@app.route("/createong", methods=["POST"])
def create_ong():
    pass

if __name__ == "__main__":
    app.run(debug=True)
