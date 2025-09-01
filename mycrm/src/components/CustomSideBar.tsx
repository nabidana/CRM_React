import React from "react";
import { Menu, MenuProps } from "antd";
import { DashboardOutlined, DollarOutlined, ProjectOutlined, ScheduleOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import i18n from 'i18next';
import { navigateTo } from "../routes/router";
import { useTranslation } from "react-i18next";

const siderItem : MenuProps['items'] = [
    {
        key : '1',
        icon : React.createElement(DashboardOutlined),
        label : ''+i18n.t('Dashboard'),
        onClick : () => {
            navigateTo('/index');
        }
    },
    {
        key : '2',
        icon : React.createElement(DollarOutlined),
        label : ''+i18n.t('Deals'),
        onClick : () => {
            navigateTo('/deals');
        }
    },
    {
        key : '3',
        icon : React.createElement(ProjectOutlined),
        label : ''+i18n.t('Projects'),
        onClick : () => {}
    },
    {
        key : '4',
        icon : React.createElement(ScheduleOutlined),
        label : ''+i18n.t('Schedule'),
        onClick : () => {}
    }
]

const CustomSideBar : React.FC = () => {

    const { t } = useTranslation();

    const sideMenuItem : MenuProps['items'] = [

    ]
        
    return(
        <>
        <div className="demo-logo-vertical" />
            <Menu theme="dark"
                style={menuStyle}
                mode="inline"
                defaultSelectedKeys={['1']}
                items={siderItem}
            />
        </>
    )
}

export default CustomSideBar;

const menuStyle: React.CSSProperties = {
    marginTop : 80,
}