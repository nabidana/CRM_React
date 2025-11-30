import enum

class AdminConfigNameEnum(str, enum.Enum) :
    USERINIT = "회원가입설정"
    
class AdminConfigCodeEnum(str, enum.Enum) :
    YN = "yn"
    DEFAULT = "default"
    
    