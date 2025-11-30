from sqlmodel import SQLModel

from src.common.models import CommonModel_SystemColumn, CommonModel_UsingColumn
from src.admin.model.AdminConfigInterface import AdminConfigModel

class AdminConfig(
    CommonModel_SystemColumn, CommonModel_UsingColumn, AdminConfigModel
    , SQLModel, table=True
) :
    __tablename__ = "adminconfig"
    __table_args__ = {
        "schema" : "main"
        , "comment" : "관리자 설정 테이블"
    }