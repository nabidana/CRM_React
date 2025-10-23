# Repository Layer

#springboot 에서 Repository
from typing import List
from sqlmodel import Session, select
from src.user.models import User
from database.database import create_db_and_tables


class UserRepository :
    def __init__(self, session : Session):
        self.session = session
        
    async def test(self) -> List[User]:
        statement = select(User)
        return list(self.session.exec(statement).all())