from logging import raiseExceptions
from flask import Flask, request, make_response, jsonify
from flask_cors import CORS, cross_origin
import hashlib
from controller import *

app = Flask(__name__)
CORS(app)
Controller = Controller()

@app.route("/ong", methods=["GET", "POST", "PUT"])
@cross_origin()
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
            response = jsonify(response)
            # # response.headers.add('Access-Control-Allow-Origin', '*')
            
            return response
            
        except Exception as e:
            response = {"Erro": e}
            response = jsonify(response)
            # response.headers.add('Access-Control-Allow-Origin', '*')
            return(make_response(response, 400))
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
            response = jsonify(response)
            # response.headers.add('Access-Control-Allow-Origin', '*')
            return response
        except Exception as e:
            response = {"Erro": e}
            response = jsonify(response)
            # response.headers.add('Access-Control-Allow-Origin', '*')
            return(make_response(response, 400))
    elif request.method == "GET":
        try:
            response = Controller.get_all_ongs()
            response = jsonify(response)
            # response.headers.add('Access-Control-Allow-Origin', '*')
            return(make_response(response, 200))
        except:
            response = {"Erro": e}
            response = jsonify(response)
            # response.headers.add('Access-Control-Allow-Origin', '*')
            return(make_response(response, 400))

@app.route("/ong/<id>", methods=["GET"])
@cross_origin()
def get_ong(id):
    """
    This method returns the ong with ong 
    """
    try:
        response = Controller.get_ong(id)
        response = jsonify(response)
        # response.headers.add('Access-Control-Allow-Origin', '*')
        return(make_response(response, 200))
    except:
        response = {"Erro": e}
        response = jsonify(response)
        # response.headers.add('Access-Control-Allow-Origin', '*')
        return(make_response(response, 400))

@app.route("/ong/<id>", methods=["DELETE"])
@cross_origin()
def delete_ong(id):
    try:
        Controller.delete_ong(id)
        response = {"Sucesso: ONG has been deleted"}
        response = jsonify(response)
        # response.headers.add('Access-Control-Allow-Origin', '*')
        return(make_response(response, 200))
    except Exception as e:
        response = {"Erro": e}
        response = jsonify(response)
        # response.headers.add('Access-Control-Allow-Origin', '*')
        return(make_response(response, 400))


@app.route("/login", methods=["POST"])
@cross_origin()
def login():
    payload = request.get_json()
    email = payload["email"]
    senha = payload["senha"]
    tipo = payload["tipo"]

    try:
        response = Controller.login(email, senha, tipo)
        response = jsonify(response)
        # response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    except Exception as e:
        response = {"Erro": e}
        response = jsonify(response)
        # response.headers.add('Access-Control-Allow-Origin', '*')
        return make_response(response, 400)

@app.route("/searchong", methods=["POST"])
@cross_origin()
def search_ong():
    payload = request.get_json()
    
    causa = payload["causa"] if "causa" in payload else None
    nome = payload["nome"] if "nome" in payload else None

        
    return Controller.search_ong(causa, nome)

if __name__ == "__main__":
    app.run(debug=True)
