from datetime import datetime
from sqlmodel import Field, SQLModel, MetaData, JSON, Column, Relationship
from typing import Optional, List

class UserAuthLinkAuthModel(SQLModel) :
    """
    UserAuth 다 : Auth 다 Link table
    """
    userauth_seqId : int | None = Field(
        default=None, foreign_key="main.userauths.seqId", primary_key=True
    )
    auth_seqId : int | None = Field(
        default=None, foreign_key="main.auths.seqId", primary_key=True
    )