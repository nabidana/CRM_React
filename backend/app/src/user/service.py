# Service Layer

from src.user.repository import UserRepository


class UserService :
    def __init__(self, repository : UserRepository):
        self.repository = repository
        
    async def test(self) :
        return await self.repository.test()