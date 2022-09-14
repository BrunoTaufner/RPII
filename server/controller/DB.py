import psycopg2
import yaml

class DB:
    def __init__(self):
        with open("server/config.yaml", 'r') as config:
            try:
                self.config = yaml.safe_load(config)
            except:
                pass

            print(self.config)

        self.client = psycopg2.connect(
            host=self.config['database']['host'],
            database=self.config['database']['database'],
            user=self.config['database']['user'],
            password=self.config['database']['password']
        )

    def query(self, sql):
        cursor = self.client.cursor()
        cursor.execute(sql)

        return cursor
