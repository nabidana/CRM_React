import { MenuProps } from "antd";
import { DashboardOutlined, DollarOutlined, ProjectOutlined, ScheduleOutlined, UploadOutlined, UserOutlined, UserSwitchOutlined, VideoCameraOutlined } from "@ant-design/icons";
import React from "react";
import { ItemType } from "antd/es/menu/interface";
import { t } from "i18next";
import { menuGroupList } from "./GlobalTypes";
import { navigateTo } from "../routes/router";

export const makeMenu = (menulist : menuGroupList[]) => {
    let menus : MenuProps['items'] = [];
    for(let i = 0 ; i < menulist.length; i++){
        const userMenuVal = menulist[i];
        if( userMenuVal.element !== undefined ){
            const getElement = userMenuVal.element;
            menus.push({
                key : getElement.linkName,
                icon : getIcons(getElement.iconName),
                label : ''+t(getElement.labelName),
                onClick : () => {
                    navigateTo('/'+getElement.linkName)
                }
            })
        }else{
            const isAdminMenu = userMenuVal.keyName === 'admins';
            const subMenuVal = userMenuVal.childList.map( (item) => {
                return {
                    key : item.linkName,
                    icon : getIcons(item.iconName),
                    label : ''+t(item.labelName),
                    onClick : () => {
                        navigateTo(
                            isAdminMenu ?
                            ('/admin/'+item.linkName)
                            :
                            ('/'+item.linkName)
                        )
                    }
                }
            });
            menus.push({
                key : userMenuVal.keyName,
                label : ''+t(userMenuVal.labelName),
                type : 'group',
                children : subMenuVal
            })
        }
    }
    /*
    key : userMenuVal.linkName,
    icon : getIcons(userMenuVal.iconName),
    label : ''+t(userMenuVal.labelName),
    onClick : () => {
        navigateTo('/'+userMenuVal.linkName)
    }
    */
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
    }else if(iconname === 'UserSwitchOutlined'){
        return React.createElement(UserSwitchOutlined);
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