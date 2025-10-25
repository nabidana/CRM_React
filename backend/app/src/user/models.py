# 데이터베이스 모델 (Entity Layer)

from datetime import datetime
from sqlmodel import Field, SQLModel, MetaData
from typing import Optional

from src.common.models import CommonModel

class UserModel(SQLModel) :
    
    seqId : Optional[int] = Field(default=None, primary_key=True)
    userId : str
    userPwd : str
    userType : str | None
    testdate : datetime = Field(
        default_factory=datetime.now
    )
    
# 컬럼 순서는 뒤에부터 1
class User(CommonModel, UserModel, table=True) :
    __tablename__ = "users"
    __table_args__ = { 'schema' : 'main'}
    # metadata 로 하면 제대로 동작안한다고함
    # TTTTTTTTTTTTTTTTTTㅣ발 얼탱이가없네 ㅋㅋㅋ
    # metadata = MetaData(schema="main")