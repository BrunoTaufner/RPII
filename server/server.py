from logging import raiseExceptions
from flask import Flask, request, make_response
from flask_cors import CORS, cross_origin
import hashlib
from controller import *

app = Flask(__name__)
CORS(app)
Controller = Controller()

@app.route("/ong", methods=["GET", "POST", "PUT"])
def ong():
    """
    This methods returns a list of all ONGs from 
    ONGs public table.
    """
    if request.method == "POST":
        try:
            payload = request.get_json()
            hashed_senha = hashlib.md5(payload['senha'].encode('utf-8')).hexdigest()
            response = Controller.create_ong(
                cnpj=payload['cnpj'] if 'cnpj' in payload else '',
                nome=payload['nome'], 
                descricao=payload['descricao'] , 
                tipo=payload['tipo'] if 'tipo' in payload else '', 
                telefone=payload['telefone'] if 'telefone' in payload else '', 
                email=payload['email'], 
                endereco_cep=payload['endereco_cep'] if 'endereco_cep' in payload else '', 
                endereco_num=payload['endereco_num'] if 'endereco_num' in payload else -1, 
                endereco_complemento=payload['endereco_complemento'] if 'endereco_completo' in payload else '', 
                senha=hashed_senha
            )
            return response
        except Exception as e:
            return(make_response("Error on creating an ONG", 400))
    elif request.method == "PUT":
        try:
            payload = request.get_json()

            if not set(['id_ong']).issubset(payload):
                raise Exception('Id obrigatórios')

            if 'senha' in payload:
                payload['senha'] = hashlib.md5(payload['senha'].encode('utf-8')).hexdigest()
            
            response = Controller.update_ong(
                payload=payload
            )
            return response
        except Exception as e:
            return(make_response("Error on updating an ONG", 400))
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
        response = Controller.login(email, senha, tipo)
        return response
    except Exception as e:
        return make_response("Error while logging in.", 400)

@app.route("/searchong", methods=["POST"])
def search_ong():
    payload = request.get_json()
    
    causa = payload["causa"] if "causa" in payload else None
    nome = payload["nome"] if "nome" in payload else None

        
    return Controller.search_ong(causa, nome)

if __name__ == "__main__":
    app.run(debug=True)
