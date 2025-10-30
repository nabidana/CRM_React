# Repository Layer

#springboot 에서 Repository
from typing import List
from sqlmodel import Session, select
from src.user.models import User
from database.database import create_db_and_tables

from src.common.repository import CommonRepository

class UserRepository(CommonRepository) :
    def __init__(self, session : Session):
        self.session = session
        
    async def selectAll(self) -> List[User]:
        statement = select(User)
        return list(self.session.exec(statement).all())
    
    async def testinsert(self) :
        TestUser = User(userId='t1', userPwd='t2', userName='testname')
        self.session.add(TestUser)
        rs = self.session.commit()
        print(rs)
        return 'ok'