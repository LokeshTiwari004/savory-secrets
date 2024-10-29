from sqlalchemy import create_engine, text

drivername = "mysqlconnector"
user = input("user_name:  ")
pswd: str = input("password:  ")
host = "localhost"
port = 3306
db_name = "savory_secrets"


if __name__ == "__main__":
  engine = create_engine(f"mysql+{drivername}://{user}:{pswd}@{host}:{port}")
  connection = engine.connect()
  connection.execute(text(f"CREATE DATABASE {db_name}"))
  connection.execute(text(f"USE {db_name}"))
else:
  engine = create_engine(f"mysql+{drivername}://{user}:{pswd}@{host}:{port}/{db_name}")
  connection = engine.connect()