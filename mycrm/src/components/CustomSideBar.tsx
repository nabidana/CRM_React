import React from "react";
import { Menu, MenuProps } from "antd";
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";

const siderItem : MenuProps['items'] = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined
].map( (icon, index) => ({
    key : String(index + 1),
    icon : React.createElement(icon),
    label : `nav ${index + 1}`
}));

const CustomSideBar : React.FC = () => {
        
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