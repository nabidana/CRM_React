
from abc import abstractmethod, ABC
from typing import List, Generic, TypeVar
from sqlmodel import Session, select

T = TypeVar('T')

class CommonRepository(ABC, Generic[T]) :
    
    @abstractmethod
    def selectAll(self) -> List[T] :
        pass