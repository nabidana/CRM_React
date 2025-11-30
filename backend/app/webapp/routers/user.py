# API 라우터 (Presentation Layer)

from fastapi import APIRouter, Depends
import json
from pydantic import BaseModel
from typing import Any

from redis.commands.json.path import Path
from webapp.session.session import get_redis

from src.user.service import UserService
from src.user.model.UserInterface import UserModel
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
    data : UserModel,
    userservice : UserService = Depends(dependency_userService)
) :
    print('테스트중')
    return await userservice.testing()

class redistest(BaseModel) :
    key : str
    data : dict[str, Any]
@user.post('/redisInsert', tags=['user'])
async def sessiontest(data : redistest, redis = Depends(get_redis)) :
    # getItem = await redis.json().get(val)
    # redis.json 통해 json 직접 설정은 타임 설정이 없음. 따라서 string 형식이 효율적 -> ?
    # 별도로 expire 통해서 시간 설정해야함. string 형식이 나을지도
    # await redis.json().set(val, Path.root_path(), testItem)
    print(data)
    #시간 연장 시도
    result = await redis.expire(data.key, 60, xx=True)
    # print(f'num : {result}') True or False
    if not result :
        await redis.set(data.key, json.dumps(data.data), ex=60)
    return {
        'insert' : 'success'
    }
@user.get('/redisGet/{val}', tags=['user'])
async def sessiontest2(val : str, redis = Depends(get_redis)) :
    getItem = await redis.get(val)
    if getItem :
        getItem = json.loads(getItem.decode('utf-8'))
        return getItem
    else :
        return {
            'data' : 'NULL'
        }