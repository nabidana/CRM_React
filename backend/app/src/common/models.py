from sqlmodel import Field, SQLModel
from typing import Optional
from datetime import datetime, timezone

# 공통 컬럼 = 시스템 컬럼
class CommonModel_SystemColumn(SQLModel) :
    
    # default=datetime.now(timezone.utc) => sysdate
    createDate : datetime = Field(default=datetime.now(timezone.utc))
    createUserName : str | None
    updateDate : datetime = Field(default=datetime.now(timezone.utc))
    updateUserName : str | None

# 사용여부 관리    
class CommonModel_UsingColumn(SQLModel) :
    
    isActive : bool = Field(default=False)
    isDelete : bool = Field(default=False)
    