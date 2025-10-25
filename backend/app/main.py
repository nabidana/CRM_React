# FastAPI 실행 파일
from typing import Union
from contextlib import asynccontextmanager
from fastapi import FastAPI, Depends

from webapp.routers.user import user
from database.database import create_db_and_tables, deleteAllDbTables
from dependencies.dependency import dependency_userService
from src.user.service import UserService

@asynccontextmanager
async def lifespan(app : FastAPI) :
    print("Startup: Creating database tables...")
    create_db_and_tables()
    yield
    deleteAllDbTables()
    print("Shutdown: Closing database connections...")

app = FastAPI(
    lifespan=lifespan
)

app.include_router(user)