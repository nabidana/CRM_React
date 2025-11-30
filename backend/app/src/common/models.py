from sqlmodel import Field, SQLModel
from typing import Optional
from datetime import datetime, timezone

# 공통 컬럼 = 시스템 컬럼
class CommonModel_SystemColumn(SQLModel) :
    
    # default=datetime.now(timezone.utc) => sysdate
    createDate : datetime = Field(default=datetime.now(timezone.utc), description='생성 일자'
        , sa_column_kwargs={"comment" : "생성 일자"})
    createUserName : str | None = Field(default=None, nullable=False, description='생성 사용자Id'
        , sa_column_kwargs={"comment" : "생성 사용자Id"})
    updateDate : datetime = Field(default=datetime.now(timezone.utc), description='수정 일자'
        , sa_column_kwargs={"comment" : "수정 일자"})
    updateUserName : str | None = Field(default=None, nullable=False, description='수정 사용자Id'
        , sa_column_kwargs={"comment" : "수정 사용자Id"})

# 사용여부 관리    
class CommonModel_UsingColumn(SQLModel) :
    
    isActive : bool = Field(default=True, description='사용 여부'
        , sa_column_kwargs={"comment" : "사용 여부(True : 사용, False : 미사용)"})
    isDelete : bool = Field(default=False, description='삭제 여부'
        , sa_column_kwargs={"comment" : "삭제 여부(True : 삭제, False : 미삭제)"})