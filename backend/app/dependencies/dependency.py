# 의존성 관리 (Repository, Service)
from fastapi import Depends
from sqlmodel import Session
from database.database import get_session
from src.user.repository import UserRepository
from src.user.service import UserService

# 사용자 의존성
def dependency_userRepository( session : Session = Depends(get_session) ) -> UserRepository :
    return UserRepository(session)
def dependency_userService(
    repository : UserRepository = Depends(dependency_userRepository)
) -> UserService :
    return UserService(repository)