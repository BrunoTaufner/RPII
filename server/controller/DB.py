import psycopg2
import psycopg2.extras
import yaml

class DB:
    def __init__(self):
        with open("config.yaml", 'r') as config:
            try:
                self.config = yaml.safe_load(config)
            except:
                pass
        
        self.QUERY_PATH = "db/queries"
    
    @property
    def conn(self):
        return psycopg2.connect(
            host=self.config['database']['host'],
            database=self.config['database']['database'],
            user=self.config['database']['user'],
            password=self.config['database']['password']
        )

    def get_cursor(self):
        return self.conn.cursor(cursor_factory=psycopg2.extras.DictCursor)

    def get_records(self, query, parameters=None):
        with self.get_cursor() as cursor:
            if parameters is not None:
                cursor.execute(query,parameters)
            else:
                cursor.execute(query)

            data = cursor.fetchall()
            result = []

            for line in data:
                response = {}
                for key, value in line.items():
                    response[key] = value

                result.append(response)

            return result

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
