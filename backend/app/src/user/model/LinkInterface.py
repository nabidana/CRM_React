from datetime import datetime
from sqlmodel import Field, SQLModel, MetaData, JSON, Column, Relationship
from typing import Optional, List

class UserAuthLinkAuthModel(SQLModel) :
    """
    UserAuth 다 : Auth 다 Link table
    """
    userauth_seqId : int | None = Field(nullable=False, foreign_key="main.userauths.seqId"
        , primary_key=True, description='사용자권한 seqId'
        , sa_column_kwargs={"comment" : "사용자권한"}
    )
    auth_seqId : int | None = Field(nullable=False, foreign_key="main.auths.seqId"
        , primary_key=True, description='권한 seqId'
        , sa_column_kwargs={"comment" : "권한"}
    )