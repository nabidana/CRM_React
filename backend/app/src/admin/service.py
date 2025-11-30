
from src.admin.repository import AdminRepository
from src.common.service import CommonService

class AdminService(CommonService) :
    def __init__(self, repository : AdminRepository):
        self.repository = repository