# Service Layer

from src.user.repository import UserRepository
from src.common.service import CommonService

class UserService(CommonService) :
    def __init__(self, repository : UserRepository):
        self.repository = repository
        
    async def selectAll(self) :
        return await self.repository.selectAll()
    
    async def testing(self) :
        return await self.repository.testinsert()