from typing import List
from sqlmodel import Session, select
from src.admin.models import AdminConfig

from src.common.repository import CommonRepository

class AdminRepository() :
    def __init__(self, session : Session):
        self.session = session
    
    async def selectAll(self) -> List[AdminConfig]:
        statement = select(AdminConfig)
        return list(self.session.exec(statement).all())