
from abc import abstractmethod, ABC
from typing import List, Generic, TypeVar

T = TypeVar('T')

class CommonService(ABC, Generic[T]) :
    
    def null2Blank(any) -> str :
        if any == None :
            return ''
        elif type(any) == str :
            return any
        else :
            return str(any)
        
    @abstractmethod
    async def selectAll(self) :
        pass