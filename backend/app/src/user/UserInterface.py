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
    """
    seqId : Optional[int] = Field(default=None, primary_key=True)
    userId : str
    userName : str
    userPwd : str
    userType : int | None = Field(default=None, foreign_key="main.usertypes.seqId")
    userJobGrade : int | None = Field(default=None, foreign_key="main.userjobgrades.seqId")

class UserTypeModel(SQLModel) :
    """
    사용자 유형 테이블
    - seqId : PK(auto increment)
    - typeName : 유형명
    - typeDescription : 유형설명
    - userAuth : 사용자 권한(FK Table : UserAuthModel)
    """
    seqId : Optional[int] = Field(default=None, primary_key=True)
    typeName : str
    typeDescription : str | None
    userAuth : int | None = Field(default=None, foreign_key="main.userauths.seqId")

class UserAuthModel(SQLModel) :
    """
    사용자 권한 테이블
    - seqId : PK(auto increment)
    - authName : 권한명
    - authDescription : 권한설명
    - authList : List[AuthModel] 권한목록
    """
    seqId : Optional[int] = Field(default=None, primary_key=True)
    authName : str
    authDescription : str | None
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
    seqId : Optional[int] = Field(default=None, primary_key=True)
    groupName : str
    groupDescription : str | None