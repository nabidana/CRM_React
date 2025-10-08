import { theme } from "antd";
import { useTranslation } from "react-i18next";

const { useToken } = theme;

const UserManagement : React.FC = () => {

    const { t } = useTranslation();
    const { token } = useToken();

    return(
        <></>
    )
}

export default UserManagement;