import { Button, Checkbox, Image, Input, Layout, Select, Space, Tooltip, Typography } from "antd";
import loginImg from '../images/crmimage1.jpg';
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { useCRMDispatch } from "../../redux/IndexRedux";
import { OpenDialog } from "../../redux/DialogRedux";
import { DoLogin } from "../../redux/AuthRedux";

const LoginLayout : React.FC = () => {

    const { Title } = Typography;
    const { t, i18n } = useTranslation();
    const localeChange = (value : string ) => {
        i18n.changeLanguage(value);
    }
    const dispatch = useCRMDispatch();
    const navigate = useNavigate();

    return(
        <Layout style={{ 
                marginTop : '10%',
                width : '80%',
                marginLeft : '10%'
            }}
        >
            <Space align="start" 
                size="large" 
                style={{
                    width : '100%'
                }}
            >
                <Image src={loginImg}
                    preview={false} 
                    style={{
                        width : '100%', 
                        height: 'auto'
                    }}
                />
                <Space direction="vertical"
                    size='middle'
                    style={{
                        width : '500px',
                    }}
                >
                    <div 
                        style={{
                            marginLeft : '5%',
                            textAlign : 'center',
                            height : '1%'
                        }}
                    >
                        <Title>
                            {t("Company Name")}
                        </Title>
                    </div>
                    <Space 
                        style={{ 
                            marginLeft : '15%',
                        }}
                    >
                        <Title>
                            CRM {t("Login")}
                        </Title>
                        <Select
                            defaultValue="ko"
                            style={{ marginLeft : '10%'}}
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
                            style={{
                                marginLeft : '10%',
                                width : '80%',
                                marginTop : '2%'
                            }}
                            placeholder={t("LoginID")+""}
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
                                marginLeft : '10%',
                                width : '80%',
                                marginTop : '3%'
                            }}
                        />
                    </Tooltip>
                    <Checkbox
                        style={{
                            marginLeft : '10%',
                            marginTop : '3%'
                        }}
                    >
                            {t("LoginRemember")}
                    </Checkbox>
                    <Link to="#"
                        style={{
                            marginLeft : '10%',
                            marginTop : '5%',
                        }}
                        onClick={() => {
                            dispatch(OpenDialog({modalType : 'FindPwdDialog'}));
                        }}
                    >
                        {t("ForgetPassword")}
                    </Link>
                    <Button 
                        color="danger" 
                        variant="solid"
                        style={{
                            marginTop : '1%',
                            marginLeft : '10%',
                            width : '80%',
                            fontSize : '130%'
                        }}
                        onClick={ async() => {
                            const usertype = await dispatch(DoLogin({
                                id : '',
                                pwd : '',
                            })).unwrap();
                            if(usertype !== ''){
                                navigate('/index');
                            }
                        }}
                    >
                        {t("Login")}
                    </Button>
                </Space>
            </Space>
        </Layout>
    );
}

export default LoginLayout;