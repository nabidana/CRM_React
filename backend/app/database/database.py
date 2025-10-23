# Async DB 세션 관리
from sqlmodel import create_engine, Session, SQLModel

from src.user.models import User

# DB 접속 정보
DB_HOST = "localhost:5432"
DB_NAME = "postgres"
DB_USER_NAME = "root"
DB_USER_PWD = "asd123"

engine = create_engine(
    f'postgresql://{DB_USER_NAME}:{DB_USER_PWD}@{DB_HOST}/{DB_NAME}'
    , echo=True
)

def get_session():
    with Session(engine) as session :
        yield session
        
def create_db_and_tables() :
    print("Creating database tables...")
    SQLModel.metadata.create_all(engine)
    print("Database tables created successfully!")