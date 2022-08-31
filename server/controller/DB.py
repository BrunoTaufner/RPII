class DB:
    def __init__():
        self.client = psycopg2.connect(
            host="",
            database="",
            user="",
            password=""
        )

    def query(sql):
        cursor = self.client.cursor()
        cursor.execute(sql)

        return self.cursor