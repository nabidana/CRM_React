from datetime import datetime
from sqlmodel import Field, SQLModel, MetaData, JSON, Column, Relationship
from typing import Optional, List

class AuthModel(SQLModel) :
    """
    권한 목록 테이블
    - seqId : PK(auto increment)
    - authCode : 권한 코드(유니크)
    - authName : 권한명
    - authDescription : 권한설명
    """
    seqId : Optional[int] = Field(default=None, primary_key=True)
    authCode : str = Field(default=None, unique=True)
    authName : str
    authDescription : str | None
    # userauthlinks : list["UserAuthModel"] = Relationship(
    #     back_populates="authlinks", link_model=UserAuthLinkAuthModel
    # )