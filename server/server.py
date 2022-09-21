from flask import Flask, request, make_response
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
        try:
            payload = request.get_json()
            response = Controller.create_ong(cnpj=payload['cnpj'], nome=payload['nome'], descricao=payload['descricao'], tipo=payload['tipo'], telefone=payload['telefone'], email=payload['email'], endereco_cep=payload['endereco_cep'], endereco_num=payload['endereco_num'], endereco_complemento=payload['endereco_complemento'], senha=payload['senha'])
            return(make_response(payload, 200))
        except:
            return(make_response("Error on creating an ONG", 400))
    elif request.method == "GET":
        try:
            response = Controller.get_all_ongs()
            return(make_response(response, 200))
        except:
            return(make_response("Error on gettingg ONGs", 400))

@app.route("/ong/<id>", methods=["GET"])
def get_ong(id):
    """
    This method returns the ong with ong 
    """
    try:
        response = Controller.get_ong(id)
        return(make_response(response, 200))
    except:
        return(make_response("Error on getting ONG", 400))

@app.route("/ong/<id>", methods=["DELETE"])
def delete_ong(id):
    try:
        Controller.delete_ong(id)
        return(make_response("ONG has been deleted", 200))
    except:
        return(make_response("Error on deleting ONG", 400))

if __name__ == "__main__":
    app.run(debug=True)
