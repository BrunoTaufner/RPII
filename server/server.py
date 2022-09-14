from flask import Flask, request
import controller
from controller import *

app = Flask(__name__)

db = DB()

QUERIES_PATH = "db/queries"

@app.route("/")
def homepage():
    return "This is the home page !"


@app.route("/getong", methods=["GET"])
def get_all_ongs():
    """
    This methods returns a list of all ONGs from 
    ONGs public table.
    """
    sql = open(f"{QUERIES_PATH}/get_all_ongs.sql", "r").read()
    res = db.query(sql)
    return res


@app.route("/getong/<id>", methods=["GET"])
def get_ong(id):
    """
    This method returns the ong with ong 
    """
    id_ong = id

    query = open(f"{QUERIES_PATH}/get_single_ong.sql", "r").read()
    query = query.format(id=id_ong)

    res = db.query(query)

    return res



if __name__ == "__main__":
    app.run(debug=True)
