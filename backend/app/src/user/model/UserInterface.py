# 데이터베이스 모델 - 실제 생성하지 않는 종속성만 담음
from datetime import datetime
from sqlmodel import Field, SQLModel, MetaData, JSON, Column, Relationship
from typing import Optional, List

class UserModel(SQLModel) :
    """
    사용자 메인 테이블
    - seqId : PK(auto increment)
    - userId : 사용자 로그인 ID
    - userName : 사용자 로그인 후 별명
    - userPwd : 사용자 패스워드
    - userGroup : 사용자 유형(FK Table : UserTypeModel)
    - userJobGrade : 사용자 직급(FK Table : UserJobGradeModel)
    - userState : 사용자 상태(FK Table : UserStateModel)
    """
    # Optional[int] 사용은 파이썬 버전에갈림 (3.9 이하에서는 사용해야함)
    # seqId : Optional[int] = Field(default=None, primary_key=True)
    seqId : int | None = Field(default=None, primary_key=True)
    # Field 의 description = swagger 설명란
    userId : str | None = Field(nullable=False, unique=True
        , description='사용자 로그인 ID', index=True
        , sa_column_kwargs={"comment" : "사용자 로그인 ID"}
    )
    userName : str | None = Field(nullable=False
        , sa_column_kwargs={"comment" : "사용자 로그인 후 별명"})
    userPwd : str | None = Field(nullable=False
        , sa_column_kwargs={"comment" : "사용자 패스워드"})
    userType : int | None = Field(nullable=False, foreign_key="main.usertypes.seqId"
        , sa_column_kwargs={"comment" : "사용자 유형"})
    userJobGrade : int | None = Field(nullable=False, foreign_key="main.userjobgrades.seqId"
        , sa_column_kwargs={"comment" : "사용자 직급"})
    userState : int | None = Field(nullable=False, foreign_key="main.userstates.seqId"
        , sa_column_kwargs={"comment" : "사용자 상태"})
class UserTypeModel(SQLModel) :
    """
    사용자 유형 테이블
    - seqId : PK(auto increment)
    - typeName : 유형명
    - typeDescription : 유형 설명
    - userAuth : 사용자 권한(FK Table : UserAuthModel)
    """
    seqId : int | None = Field(default=None, primary_key=True)
    typeName : str | None = Field(nullable=False, unique=True
        , sa_column_kwargs={"comment" : "유형명"})
    typeDescription : str | None = Field(default=None
        , sa_column_kwargs={"comment" : "유형 설명"})
    userAuth : int | None = Field(default=None, foreign_key="main.userauths.seqId"
        , sa_column_kwargs={"comment" : "사용자 권한"})

class UserAuthModel(SQLModel) :
    """
    사용자 권한 테이블
    - seqId : PK(auto increment)
    - authName : 권한명
    - authDescription : 권한설명
    - authList : List[AuthModel] 권한목록
    """
    seqId : int | None = Field(default=None, primary_key=True)
    authName : str | None = Field(nullable=False, unique=True
        , sa_column_kwargs={"comment" : "권한명"})
    authDescription : str | None = Field(default=None
        , sa_column_kwargs={"comment" : "권한설명"})
    # authlinks : list["AuthModel"] = Relationship(
    #     back_populates="userauthlinks", link_model=UserAuthLinkAuthModel
    # )
    
class UserJobGradeModel(SQLModel) :
    """
    사용자 직급 테이블
    - seqId : PK(auto increment)
    - groupName : 그룹명
    - groupDescription : 그룹설명
    """
    seqId : int | None = Field(default=None, primary_key=True)
    groupName : str | None = Field(nullable=False, unique=True
        , sa_column_kwargs={"comment" : "그룹명"})
    groupDescription : str | None = Field(default=None
        , sa_column_kwargs={"comment" : "그룹설명"})
    
class UserStateModel(SQLModel) :
    """
    사용자 상태 테이블
    - seqId : PK(auto increment)
    - stateName : 상태명
    - stateDescription : 상태설명
    """
    seqId : int | None = Field(default=None, primary_key=True)
    stateName : str | None = Field(nullable=False, unique=True
        , sa_column_kwargs={"comment" : "상태명"})
    stateDescription : str | None = Field(default=None
        , sa_column_kwargs={"comment" : "상태설명"})