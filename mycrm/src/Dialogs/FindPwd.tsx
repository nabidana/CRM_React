import { Button, Modal, Space, Typography } from "antd";
import { useCRMDispatch, useCRMSelector } from "../redux/IndexRedux";
import { CloseDialog, SelectDialog } from "../redux/DialogRedux";
import { useTranslation } from "react-i18next";
import { MailOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";

const FindPwd : React.FC = () => {

    const { t } = useTranslation();
    const { visible } = useCRMSelector(SelectDialog);
    const dispatch = useCRMDispatch();

    const closeDialog = () => {
        dispatch(CloseDialog());
    }

    return(
        <Modal
            title=
                <Typography.Title style={{ textAlign : 'center'}}>
                    {t("FindPwdTitle")}
                </Typography.Title>
            open={visible}
            footer={
                <Button
                    color="primary"
                    variant="solid"
                    onClick={() => closeDialog()}
                    style={{
                        marginRight : '2vh',
                        width : '15vh',
                        height : '4vh',
                        fontSize : '3vh'
                    }}
                >
                    {t("Cancel")}
                </Button>
            }
        >
            <Space.Compact direction="vertical">
                <Button 
                    color="default"
                    variant="outlined"
                    style={buttonStyle}
                >
                    <div>
                        <Typography.Title 
                            level={3} 
                            style={{ 
                                textAlign : 'center'
                            }}
                        >
                            <PhoneOutlined 
                                style={{
                                    color : 'blue'
                                }}
                            />
                            {t("AuthenticationPhone")}
                        </Typography.Title>
                        <Typography.Title 
                            level={5} 
                            style={contentStyle}
                        >
                            {t("AuthenticationPhoneContent")}
                        </Typography.Title>
                    </div>
                </Button>
                <Button 
                    color="default"
                    variant="outlined"
                    style={buttonStyle}
                >
                    <div>
                        <Typography.Title 
                            level={3} 
                            style={{ 
                                textAlign : 'center'
                            }}
                        >
                            <MailOutlined 
                                style={{
                                    color : 'blue'
                                }}
                            />
                            {t("AuthenticationEmail")}
                        </Typography.Title>
                        <Typography.Title 
                            level={5} 
                            style={contentStyle}
                        >
                            {t("AuthenticationEmailContent")}
                        </Typography.Title>
                    </div>
                </Button>
                <Button
                    color="default"
                    variant="outlined"
                    style={buttonStyle}
                >
                    <div>
                        <Typography.Title 
                            level={3} 
                            style={{ 
                                textAlign : 'center'
                            }}
                        >
                            <UserOutlined 
                                style={{
                                    color : 'blue'
                                }}
                            />
                            {t("AuthenticationAdmin")}
                        </Typography.Title>
                        <Typography.Title 
                            level={5} 
                            style={contentStyle}
                        >
                            {t("AuthenticationAdminContent")}
                        </Typography.Title>
                    </div>
                </Button>
            </Space.Compact>
        </Modal>
    )
}

export default FindPwd;

const buttonStyle : React.CSSProperties = {
    marginTop : '1.5vh',
    marginLeft : '3vh',
    width : '40vh',
    height : '10vh'
}

const contentStyle : React.CSSProperties = {
    marginTop : '0.5vh', 
    marginLeft : '2vh',
    textAlign : 'start',
    width : '40vh',
    whiteSpace : 'normal'
}