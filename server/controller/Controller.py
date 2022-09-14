
import psycopg2
from .DB import *

class Controller:
    def __init__(self):
        self.db = DB()

    def get_all_ongs(self):
        query = open(f"{self.db.QUERY_PATH}/get_all_ongs.sql", "r").read()
        return self.db.get_records(query)

    def get_ong(self, id):
        query = open(f"{self.db.QUERY_PATH}/get_single_ong.sql", "r").read()
        query = query.format(id=id)

        return self.db.get_records(query)[0]

    def delete_ong(self, id):
        query = open(f"{self.db.QUERY_PATH}/delete_ong_from_id.sql", "r").read()
        query = query.format(id=id)

        return self.db.run(query)

if __name__ == '__main__':
    raise Exception('')