
import psycopg2
from .DB import *

class Controller:
    def __init__(self):
        self.db = DB()

    def get_all_ongs(self):
        query = open(f"{self.db.QUERY_PATH}/get_all_ongs.sql", "r").read()
        return self.db.query(query)

    def get_ong(self, id):
        query = open(f"{self.db.QUERY_PATH}/get_single_ong.sql", "r").read()
        query = query.format(id=id)

        return self.db.query(query)

if __name__ == '__main__':
    raise Exception('')