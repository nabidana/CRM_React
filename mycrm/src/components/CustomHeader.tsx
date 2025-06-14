import React from "react";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from '@ant-design/icons';
import { Button, Input, Menu, Space } from "antd";
import { blue, blueDark, cyanDark, volcanoDark, presetDarkPalettes } from "@ant-design/colors";

// const headerItem = Array.from({ length : 5}).map((_, index) => ({
//     key : index + 1,
//     label : `nav ${index + 1}`,
// }));

const CustomHeader : React.FC<{collapsed:boolean, setCollapsed:Function}> = (props) => {

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
                <Input.Search placeholder="검색할 내용을 입력하세요." 
                    enterButton
                />
            </Space.Compact>
            <Button color="default" variant="outlined" style={{
                marginLeft : '83vh'
            }}>
                Log in
            </Button>
            <Button color="orange" variant="solid" style={{
                marginLeft : '3vh'
            }}>
                Register
            </Button>
        </>
    )
}

export default CustomHeader;