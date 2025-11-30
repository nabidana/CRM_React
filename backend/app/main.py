# FastAPI 실행 파일
from typing import Union
from contextlib import asynccontextmanager
from fastapi import FastAPI, Depends

from webapp.routers.user import user
from database.database import create_db_and_tables, deleteAllDbTables, db_defaultinfo_insert
from dependencies.dependency import dependency_userService
from src.user.service import UserService

# 앱 실행시 실행
@asynccontextmanager
async def lifespan(app : FastAPI) :
    
    deleteAllDbTables()
    print("Startup: Creating database tables...")
    create_db_and_tables()
    db_defaultinfo_insert()
    # 앱 종료시 실행
    yield
    deleteAllDbTables()
    print("Shutdown: Closing database connections...")

app = FastAPI(
    lifespan=lifespan
)

app.include_router(user)