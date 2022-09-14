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

        self.client = psycopg2.connect(
            host=self.config['database']['host'],
            database=self.config['database']['database'],
            user=self.config['database']['user'],
            password=self.config['database']['password']
        )
        self.cursor = self.client.cursor(cursor_factory=psycopg2.extras.DictCursor)


        self.QUERY_PATH = "db/queries"

    def query(self, sql):
        self.cursor.execute(sql)
        data = self.cursor.fetchall()
        result = []

        for line in data:
            response = {}
            for key, value in line.items():
                response[key] = value

            result.append(response)

        return result
