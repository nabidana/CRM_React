# API 라우터 (Presentation Layer)

from fastapi import APIRouter, Depends

from src.user.service import UserService
from dependencies.dependency import dependency_userService

user = APIRouter(prefix='/user')

@user.get('/', tags=['user'])
async def index(
    userservice : UserService = Depends(dependency_userService)
) :
    print('들어옴')
    return await userservice.selectAll()

@user.post('/test', tags=['user'])
async def testing(
    userservice : UserService = Depends(dependency_userService)
) :
    print('테스트중')
    return await userservice.testing()