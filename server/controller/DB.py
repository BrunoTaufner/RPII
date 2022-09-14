import psycopg2
import yaml

class DB:
    def __init__(self):
        with open("config.yaml", 'r') as config:
            try:
                self.config = yaml.safe_load(config)
            except:
                pass

        self.client = psycopg2.connect(
            host=self.config['database']['host'],
            database=self.config['database']['database'],
            user=self.config['database']['user'],
            password=self.config['database']['password']
        )

        self.QUERY_PATH = "db/queries"

    def query(self, sql):
        cursor = self.client.cursor()
        cursor.execute(sql)
        res = cursor.fetchall()

        return res
