import psycopg2
import yaml

class DB:
    def __init__(self):
        with open("config.yaml", 'r') as config:
            try:
                self.config = yaml.safe_load(config)
            except:
                pass

            print(self.config)

        
    @property
    def conn(self):
        return psycopg2.connect(
            host=self.config['database']['host'],
            database=self.config['database']['database'],
            user=self.config['database']['user'],
            password=self.config['database']['password']
        )

    def get_records(self, query, parameters=None):
        with self.conn as conn:
            with conn.cursor() as cur:
                if parameters is not None:
                    cur.execute(query,parameters)
                else:
                    cur.execute(query)
                return cur.fetchall()

    def run(self, query, autocommit=False, parameters=None):
        with self.conn as conn:
            conn.autocommit = autocommit
            with conn.cursor() as cur:
                if parameters is not None:
                    cur.execute(query,parameters)
                else:
                    cur.execute(query)
            if not autocommit:
                conn.commit()
