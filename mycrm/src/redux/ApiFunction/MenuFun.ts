import { MenuProps } from "antd";
import { DashboardOutlined, DollarOutlined, ProjectOutlined, ScheduleOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import React from "react";
import { ItemType } from "antd/es/menu/interface";
import { navigateTo } from "../../routes/router";
import { t } from "i18next";
import { meusList } from "../../types/CustomTypes";

export const makeMenu = (menulist : meusList[]) => {
    let menus : MenuProps['items'] = [];
    for(let i = 0 ; i < menulist.length; i++){
        const userMenuVal = menulist[i];
        menus.push({
            key : (i+1).toString(),
            icon : getIcons(userMenuVal.iconName),
            label : ''+t(userMenuVal.labelName),
            onClick : () => {
                navigateTo('/'+userMenuVal.linkName)
            }
        })
    }
    return menus;
}

export const getIcons = (iconname : string) => {
    if(iconname === 'DashboardOutlined'){
        return React.createElement(DashboardOutlined);
    }else if(iconname === 'DollarOutlined'){
        return React.createElement(DollarOutlined);
    }else if(iconname === 'ProjectOutlined'){
        return React.createElement(ProjectOutlined);
    }else if(iconname === 'ScheduleOutlined'){
        return React.createElement(ScheduleOutlined);
    }else if(iconname === 'UploadOutlined'){
        return React.createElement(UploadOutlined);
    }
}
/*
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
*/