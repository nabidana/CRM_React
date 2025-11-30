
from sqlmodel import Field, SQLModel, Enum, Column
from typing import Optional

from src.common.enum import AdminConfigCodeEnum, AdminConfigNameEnum

class AdminConfigModel(SQLModel) :
    """
    관리자 설정 테이블
    - seqId : PK(auto increment)
    - configName : 관리자 설정명 (유니크)
    - configCodeVal : 관리자 설정 유형명
    - configVal : 설정 값
    """
    seqId : int | None = Field(default=None, primary_key=True)
    configName : AdminConfigNameEnum | None = Field(
        #nullable=False
        sa_column=Column(
            Enum(
                AdminConfigNameEnum
                , schema="main"
        ), nullable=False, comment="관리자 설정명")    
        # , sa_column_kwargs={"comment" : "관리자 설정명"}
    )
    configCodeVal : AdminConfigCodeEnum | None = Field(
        # nullable=False
        sa_column=Column(
            Enum(
                AdminConfigCodeEnum
                , schema="main"
            ), nullable=False, comment="관리자 설정 유형명"
        )
        # , sa_column_kwargs={"comment" : "관리자 설정 유형명"}
    )
    configVal : str | None = Field(default=None
        , sa_column_kwargs={"comment" : "설정 값"})


# [SQL: CREATE TYPE adminconfignameenum AS ENUM ('USERINIT')] 실행함
# permission denied for schema public
# 스키마지정하려면 오리지날 sqlalchemy 꺼 사용해야함
    
# class AdminConfigIdItemModel(SQLModel) :
#     """
#     관리자 설정 ID값 관리 테이블
#     - seqId : PK(auto increment)
#     - configCode : 설정 코드 값
#     - configCodeDescription : 설정 코드 설명
#     """
#     seqId : int | None = Field(default=None, primary_key=True)
#     configCode : str | None = Field(nullable=False
#         , sa_column_kwargs={"comment" : "설정 코드 값"})
#     configCodeDescription : str | None = Field(default=None
#         , sa_column_kwargs={"comment" : "설정 코드 설명"})