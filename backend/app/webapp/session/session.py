import os
from dotenv import load_dotenv

# redis fastapi 세션 공유 위해
from fastapi_cache import FastAPICache
from fastapi_cache.backends.redis import RedisBackend
from fastapi_cache.decorator import cache
from redis import asyncio

load_dotenv()
redisHost = os.getenv('REDIS_URL')
redisPort = os.getenv('REDIS_PORT')

redisclient = asyncio.Redis(host=redisHost, port=redisPort, db=0)
FastAPICache.init(RedisBackend(redisclient), prefix='fastapi-cache')

async def get_redis() :
    return redisclient

# 함수보는칸
# redisclient.json().set().