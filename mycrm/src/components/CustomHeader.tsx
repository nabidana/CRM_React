import React from "react";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Avatar, Button, Dropdown, Input, Menu, MenuProps, Select, Space, Typography } from "antd";
import { blue, blueDark, cyanDark, volcanoDark, presetDarkPalettes } from "@ant-design/colors";
import { useTranslation } from "react-i18next";

const items : MenuProps['items'] = [
    {
        key : '1',
        label : 'test1'
    },
    {
        key : '2',
        label : 'test2'
    },
    {
        key : '3',
        label : 'test3'
    },
]

const CustomHeader : React.FC<{collapsed:boolean, setCollapsed:Function}> = (props) => {

    // 언어 설정
    const { t, i18n } = useTranslation();
    const localeChange = (value : string ) => {
        i18n.changeLanguage(value);
    }

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
            <Space.Compact
                style={{
                    marginLeft : '25%'
                }}
            >
                <Dropdown menu={{items}}>
                    <Space>
                        <Avatar icon={<UserOutlined />} />
                        <Typography.Text 
                            style={{ color : 'white'}}
                        >
                            ASD
                        </Typography.Text>
                    </Space>
                </Dropdown>
            </Space.Compact>
        </>
    )
}

export default CustomHeader;