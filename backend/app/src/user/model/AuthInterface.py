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
    seqId : int | None = Field(default=None, primary_key=True)
    authCode : str | None = Field(nullable=False, unique=True
        , sa_column_kwargs={"comment" : "권한 코드"})
    authName : str | None = Field(nullable=False
        , sa_column_kwargs={"comment" : "권한명"})
    authDescription : str | None = Field(default=None
        , sa_column_kwargs={"comment" : "권한 설명"})
    # userauthlinks : list["UserAuthModel"] = Relationship(
    #     back_populates="authlinks", link_model=UserAuthLinkAuthModel
    # )