# 데이터베이스 모델 (Entity Layer) - 실제 생성하는 테이블

from datetime import datetime
from sqlmodel import Field, SQLModel, MetaData, Relationship
from typing import Optional

from src.common.models import CommonModel_SystemColumn, CommonModel_UsingColumn
from src.user.model.UserInterface import UserModel, UserTypeModel, UserAuthModel, UserJobGradeModel, UserStateModel
from src.user.model.AuthInterface import AuthModel
from src.user.model.LinkInterface import UserAuthLinkAuthModel

#Link 용 먼저
class UserAuthLinkAuth(
    CommonModel_SystemColumn, CommonModel_UsingColumn, UserAuthLinkAuthModel
    , SQLModel, table=True
) :
    __tablename__ = "userauthlinkauth"
    __table_args__ = {
        "schema" : "main"
        , "comment" : "사용자 - 사용자권한 링크용 테이블"
    }

# 컬럼 순서는 뒤에부터 1
class User(CommonModel_SystemColumn, UserModel, table=True) :
    __tablename__ = "users"
    __table_args__ = {
        "schema" : "main"
        , "comment" : "사용자 메인 테이블"
    }
    # metadata 로 하면 제대로 동작안한다고함
    # TTTTTTTTTTTTTTTTTTㅣ발 얼탱이가없네 ㅋㅋㅋ
    # metadata = MetaData(schema="main")

# 사용자 유형
class UserType(
    CommonModel_SystemColumn, CommonModel_UsingColumn, UserTypeModel
    , SQLModel, table=True
) :
    __tablename__ = "usertypes"
    __table_args__ = {
        "schema" : "main"
        , "comment" : "사용자 유형 테이블"
    }
    
class UserAuth(
    CommonModel_SystemColumn, CommonModel_UsingColumn, UserAuthModel
    , SQLModel, table=True
) :
    __tablename__ = "userauths"
    __table_args__ = {
        "schema" : "main"
        , "comment" : "사용자 권한 테이블"
    }
    
    authlinks : list["Auth"] = Relationship(
        back_populates="userauthlinks", link_model=UserAuthLinkAuth
    )
    
class UserJobGrade(
    CommonModel_SystemColumn, CommonModel_UsingColumn, UserJobGradeModel
    , SQLModel, table=True
) :
    __tablename__ = "userjobgrades"
    __table_args__ = {
        "schema" : "main"
        , "comment" : "사용자 직급 테이블"
    }
    
class Auth(
    CommonModel_SystemColumn, CommonModel_UsingColumn, AuthModel
    , SQLModel, table=True
) :
    __tablename__ = "auths"
    __table_args__ = {
        "schema" : "main"
        , "comment" : "권한 목록 테이블"
    }
    
    userauthlinks : list["UserAuth"] = Relationship(
        back_populates="authlinks", link_model=UserAuthLinkAuth
    )
    
class UserState(
    CommonModel_SystemColumn, CommonModel_UsingColumn, UserStateModel
    , SQLModel, table=True
) :
    __tablename__ = "userstates"
    __table_args__ = {
        "schema" : "main" 
        , "comment" : "사용자 상태 테이블"
    }
    
    