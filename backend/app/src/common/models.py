from sqlmodel import Field, SQLModel
from typing import Optional
from datetime import datetime

# 공통 컬럼 = 시스템 컬럼
class CommonModel(SQLModel) :
    
    createDate : datetime = Field(default_factory=datetime.time)
    createUserName : str | None
    updateDate : datetime = Field(default_factory=datetime.time)
    updateUserName : str | None