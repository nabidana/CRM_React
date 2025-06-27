import React from "react";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from '@ant-design/icons';
import { Button, Input, Menu, Select, Space, Typography } from "antd";
import { blue, blueDark, cyanDark, volcanoDark, presetDarkPalettes } from "@ant-design/colors";
import { useTranslation } from "react-i18next";

// const headerItem = Array.from({ length : 5}).map((_, index) => ({
//     key : index + 1,
//     label : `nav ${index + 1}`,
// }));

const CustomHeader : React.FC<{collapsed:boolean, setCollapsed:Function}> = (props) => {

    // 언어 설정
    const { t, i18n } = useTranslation();
    const localeChange = (value : string ) => {
        i18n.changeLanguage(value);
    }
    // Antd - Text 사용
    const { Text, Link } = Typography;

    return(
        <>
            <div className="demo-logo" />
            <Button type="text"
                icon={ props.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => props.setCollapsed(!props.collapsed)}
                style={{
                    backgroundColor : blueDark.primary,
                    color : 'white',
                    fontSize: '16px',
                    width: 64,
                    height: 64
                }}
            />
            {/* <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                items={headerItem}
                style={{ flex : 1, minWidth : 0}}
            /> */}
            <Space.Compact style={{
                marginLeft : props.collapsed ? '28vh' : '15vh', width : '50vh'
            }}>
                <Input.Search placeholder={t("Search")+""}
                    enterButton
                />
            </Space.Compact>
            <Select
                defaultValue="ko"
                style={{ width : '10vh', textAlign : 'center', marginLeft : '10vh'}}
                onChange={localeChange}
                options={[
                    { value : 'ko', label : '한국어' },
                    { value : 'en', label : 'English'},
                ]}
            />
            <Button color="default" variant="outlined" style={{
                marginLeft : '63vh'
            }}>
                {t("Login")}
            </Button>
            <Button color="orange" variant="solid" style={{
                marginLeft : '3vh'
            }}>
                {t("Register")}
            </Button>
        </>
    )
}

export default CustomHeader;