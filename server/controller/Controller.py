
from flask import make_response, jsonify
from uuid import uuid4
import psycopg2
from .DB import *

class Controller:
    def __init__(self):
        self.db = DB()

    def _get_uuid(self):
        return uuid4().hex

    def _read_sql_file(self, file_name: str):
        return open(f"{self.db.QUERY_PATH}/{file_name}.sql", "r").read()

    def get_all_ongs(self):
        query = self._read_sql_file(file_name="get_all_ongs")
        return self.db.get_records(query)

    def get_ong(self, id):
        query = self._read_sql_file(file_name="get_single_ong")
        query = query.format(id=id)

        return self.db.get_records(query)[0]

    def delete_ong(self, id):
        query = self._read_sql_file(file_name="delete_ong_from_id")
        query = query.format(id=id)

        return self.db.run(query)

    def create_ong(self, cnpj='', nome='', descricao='', tipo='', telefone='', email='', endereco_cep='', endereco_num=-1, endereco_complemento='', senha=''):
        validation_query = self._read_sql_file(file_name="get_ongs_by_parameter")
        validation_query = validation_query.format(parameter="email", value=f"'{email}'")
        ong = self.db.get_records(validation_query)

        if len(ong) != 0:
            return make_response("Email already exists.", 409)

        query = self._read_sql_file(file_name="create_ong")
        senha = str(senha).replace("'", "''")
        query = query.format(cnpj=cnpj, nome=nome, descricao=descricao, tipo=tipo, telefone=telefone, email=email, endereco_cep=endereco_cep, endereco_num=endereco_num, endereco_complemento=endereco_complemento, senha=str(senha))
        
        try:
            self.db.run(query)
            return make_response(jsonify({
                "nome": nome,
                "email": email
            }), 200)
        except Exception as e:
            return make_response(f"Something went wrong, error={e}", 400)

    def login(self, email, senha, tipo, bcrypt):
        if tipo == "ONG":
            validation_query = self._read_sql_file(file_name="get_ongs_by_parameter")
            validation_query = validation_query.format(parameter="email", value=f"'{email}'")
            results = self.db.get_records(validation_query)

            if not results:
                return make_response("Email doesn't exists.", 404)

            ong_informations = results[0]
            print(ong_informations['senha'])
            print(bcrypt.generate_password_hash(senha))
            if not ong_informations['senha'] == senha:
                return make_response("Password is incorrect.", 401)

            return make_response(jsonify({
                "id": ong_informations["id_ong"],
                "email": ong_informations["email"]
            }), 200)
        elif tipo == "Pessoa juridica":
            return make_response("Nao implementado", 400)
        elif tipo == "Pessoa fisica":
            return make_response("Nao implementado", 400)

if __name__ == '__main__':
    raise Exception('')