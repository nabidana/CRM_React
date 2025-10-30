# Async DB 세션 관리
from sqlmodel import create_engine, Session, SQLModel
import os
from dotenv import load_dotenv

from src.user.models import User

# 기본 .env 정보 가져오기
load_dotenv()
ENVIRONMENT = os.getenv('DATABASE_TYPE')
#DB 정보 가져오기
if ENVIRONMENT == 'POSTGRESQL' :
    load_dotenv('.env.postgresql')
elif ENVIRONMENT == 'ORACLE' :
    load_dotenv('.env.oracle')

# DB 접속 정보
DBMS=os.getenv('DBMS')
DB_HOST=os.getenv('DB_HOST')
DB_PORT=os.getenv('DB_PORT')
DB_NAME=os.getenv('DB_NAME')
DB_USER=os.getenv('DB_USER')
DB_PWD=os.getenv('DB_PWD')
# DB_HOST = "localhost:5432"
# DB_NAME = "postgres"
# DB_USER_NAME = "root"
# DB_USER_PWD = "asd123"
print(f'DEBUG : {DBMS}://{DB_USER}:{DB_PWD}@{DB_HOST}:{DB_PORT}/{DB_NAME}')

engine = create_engine(
    f'{DBMS}://{DB_USER}:{DB_PWD}@{DB_HOST}/{DB_NAME}'
    , echo=True
)

def get_session():
    with Session(engine) as session :
        yield session
        
def create_db_and_tables() :
    print("Creating database tables...")
    SQLModel.metadata.create_all(engine)
    print("Database tables created successfully!")
    
def deleteAllDbTables() :
    SQLModel.metadata.drop_all(engine)