import { Image, Layout, Space, Typography } from "antd";
import loginImg from '../images/crmimage1.jpg';
import { useTranslation } from "react-i18next";

const LoginLayout : React.FC = () => {

    const { Title } = Typography;
    const { t } = useTranslation();

    return(
        <Layout style={{ marginTop : '15vh'}}>
            <Space align="start">
                <Image src={loginImg} 
                    preview={false} 
                    style={{
                        width : '100vh', 
                        height : '60vh'
                    }}
                />
                <Space.Compact direction="vertical">
                    <Title style={{ marginLeft : '20vh'}}>
                        {t("Login")}
                    </Title>
                </Space.Compact>
            </Space>
        </Layout>
    );
}

export default LoginLayout;