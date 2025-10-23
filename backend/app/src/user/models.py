# 데이터베이스 모델 (Entity Layer)

from sqlmodel import Field, SQLModel, MetaData
from typing import Optional

class User(SQLModel, table=True) :
    __tablename__ = "users"
    __table_args__ = { 'schema' : 'main'}
    # metadata 로 하면 제대로 동작안한다고함
    # TTTTTTTTTTTTTTTTTTㅣ발 얼탱이가없네 ㅋㅋㅋ
    # metadata = MetaData(schema="main")
    
    seqId : Optional[int] = Field(default=None, primary_key=True)
    userId : str
    userPwd : str