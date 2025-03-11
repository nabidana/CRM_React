import React from "react";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from '@ant-design/icons';
import { Button, Menu } from "antd";

const headerItem = Array.from({ length : 5}).map((_, index) => ({
    key : index + 1,
    label : `nav ${index + 1}`,
}));

const CustomHeader : React.FC<{collapsed:boolean, setCollapsed:Function}> = (props) => {

    return(
        <>
            <div className="demo-logo" />
            <Button type="text"
                icon={ props.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => props.setCollapsed(!props.collapsed)}
                style={{
                    backgroundColor : 'red',
                    fontSize: '16px',
                    width: 64,
                    height: 64
                }}
            />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                items={headerItem}
                style={{ flex : 1, minWidth : 0}}
            />
        </>
    )
}

export default CustomHeader;