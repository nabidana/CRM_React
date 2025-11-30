# Async DB 세션 관리
from sqlmodel import create_engine, Session, SQLModel
import os
from dotenv import load_dotenv

from src.user.models import *
from src.admin.models import *

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
    
def db_defaultinfo_insert() :
    """
    기본 정보들 insert문 쿼리
    """
    usertype_user = UserType(typeName="사용자", typeDescription="일반 사용자 유형", createUserName="초기설정", updateUserName="초기설정")
    usertype_admin = UserType(typeName="관리자", typeDescription="일반 관리자 유형", createUserName="초기설정", updateUserName="초기설정")
    
    userstate_waitaith = UserState(seqId=0, stateName="인증대기", stateDescription="사용자 본인 인증 전 단계로 가입 전 대기 상태", createUserName="초기설정", updateUserName="초기설정")
    userstate_waitcreate = UserState(seqId=1, stateName="가입대기", stateDescription="사용자 본인 인증 후 단계로 가입 신청 후, 관리자 승인 대기 상태", createUserName="초기설정", updateUserName="초기설정")
    userstate_createsuccess = UserState(seqId=2, stateName="활성화", stateDescription="사용자 가입 완료 후, 활성화 상태", createUserName="초기설정", updateUserName="초기설정")
    userstate_dormant = UserState(seqId=3, stateName="휴면", stateDescription="휴면 상태", createUserName="초기설정", updateUserName="초기설정")
    userstate_leave = UserState(seqId=4, stateName="탈퇴", stateDescription="가입 탈퇴 상태", createUserName="초기설정", updateUserName="초기설정")
    
    adminconfig_userinit = AdminConfig(seqId=0, configCodeVal="")
    
    with Session(engine) as session :
        session.add_all([ usertype_user, usertype_admin ])
        session.add_all([ userstate_waitaith, userstate_waitcreate, userstate_createsuccess, userstate_dormant, userstate_leave ])
        session.commit()