from flask import Flask, request, make_response
from flask_bcrypt import Bcrypt
from controller import *

app = Flask(__name__)

bcrypt = Bcrypt(app)
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
            hashed_senha = bcrypt.generate_password_hash(payload['senha'])
            response = Controller.create_ong(cnpj=payload['cnpj'], nome=payload['nome'], descricao=payload['descricao'], tipo=payload['tipo'], telefone=payload['telefone'], email=payload['email'], endereco_cep=payload['endereco_cep'], endereco_num=payload['endereco_num'], endereco_complemento=payload['endereco_complemento'], senha=hashed_senha)
            return response
        except Exception as e:
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


@app.route("/login", methods=["POST"])
def login():
    payload = request.get_json()
    email = payload["email"]
    senha = payload["senha"]
    tipo = payload["tipo"]

    try:
        response = Controller.login(email, senha, tipo, bcrypt)
        return response
    except Exception as e:
        print(e)
        return make_response("Error while logging in.", 400)
    


if __name__ == "__main__":
    app.run(debug=True)
