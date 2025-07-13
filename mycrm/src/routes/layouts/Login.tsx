import { Button, Checkbox, Image, Input, Layout, Select, Space, Tooltip, Typography } from "antd";
import loginImg from '../images/crmimage1.jpg';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const LoginLayout : React.FC = () => {

    const { Title } = Typography;
    const { t, i18n } = useTranslation();
    const localeChange = (value : string ) => {
        i18n.changeLanguage(value);
    }

    // const dispatch = useAppDispatch();

    return(
        <Layout style={{ 
                marginTop : '15vh',
                width : '150vh',
                marginLeft : '20vh'
            }}
        >
            <Space align="start">
                <Image src={loginImg} 
                    preview={false} 
                    style={{
                        width : '100vh', 
                        height : '60vh'
                    }}
                />
                <Space.Compact direction="vertical" size="large">
                    <div 
                        style={{
                            marginLeft : '5vh',
                            textAlign : 'center',
                            height : '6vh'
                        }}
                    >
                        <Title>
                            {t("Company Name")}
                        </Title>
                    </div>
                    <Space 
                        style={{ 
                            marginLeft : '5vh',
                        }}
                    >
                        <Title>
                            CRM {t("Login")}
                        </Title>
                        <Select
                            defaultValue="ko"
                            style={{ marginLeft : '3vh'}}
                            onChange={localeChange}
                            options={[
                                { value : 'ko', label : '한국어' },
                                { value : 'en', label : 'English'},
                            ]}
                        />
                    </Space>
                    <Tooltip 
                        trigger={['focus']}
                        title={t("LoginID")}
                        placement="topLeft"
                    >
                        <Input 
                            placeholder={t("LoginID")+""}
                            style={{
                                marginLeft : '4vh',
                                width : '40vh',
                                height : '5vh',
                                marginTop : '2vh'
                            }}
                        />
                    </Tooltip>
                    <Tooltip
                        trigger={['focus']}
                        title={t("LoginPassword")}
                        placement="topLeft"
                    >
                        <Input.Password
                            placeholder={t("LoginPassword")+""}
                            style={{
                                marginLeft : '4vh',
                                width : '40vh',
                                height : '5vh',
                                marginTop : '3vh',
                            }}
                        />
                    </Tooltip>
                    <Checkbox
                        style={{
                            marginLeft : '4vh',
                            marginTop : '1vh'
                        }}
                    >
                            {t("LoginRemember")}
                    </Checkbox>
                    <Link to="/findpwd"
                        style={{
                            marginLeft : '5vh',
                            marginTop : '5vh',
                        }}
                    >
                        {t("ForgetPassword")}
                    </Link>
                    <Button 
                        color="danger" 
                        variant="solid"
                        style={{
                            marginTop : '0.5vh',
                            marginLeft : '5vh',
                            width : '40vh',
                            height : '5vh',
                            fontSize : '3vh'
                        }}
                    >
                        {t("Login")}
                    </Button>
                </Space.Compact>
            </Space>
        </Layout>
    );
}

export default LoginLayout;