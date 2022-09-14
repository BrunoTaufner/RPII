from flask import Flask, request, make_response
import controller
from controller import *

app = Flask(__name__)
Controller = Controller()

@app.route("/ong", methods=["GET", "POST"])
def ong():
    """
    This methods returns a list of all ONGs from 
    ONGs public table.
    """
    if request.method == "POST":
        pass
    elif request.method == "GET":
        return Controller.get_all_ongs()

@app.route("/ong/<id>", methods=["GET"])
def get_ong(id):
    """
    This method returns the ong with ong 
    """

    return Controller.get_ong(id)

@app.route("/ong/<id>", methods=["DELETE"])
def delete_ong(id):
    try:
        Controller.delete_ong(id)
        return(make_response("User has been deleted", 200))
    except:
        return(make_response("Error on deleting user", 400))

if __name__ == "__main__":
    app.run(debug=True)
