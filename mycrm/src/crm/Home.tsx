import React, { useState} from "react";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined
} from '@ant-design/icons'
import { MenuProps } from "antd";
import { Button, Layout, Menu, theme } from "antd";

const { Header, Footer, Sider, Content} = Layout;

const items: MenuProps['items'] = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined
].map( (icon, index) => ({
    key : String(index + 1),
    icon : React.createElement(icon),
    label : `nav ${index + 1}`
}));

const Home : React.FC = () => {
    //[현재 state, state 를 변경하기 위한 함수]
    const [ collapsed, setCollapsed] = useState(false);

    const {
        token : { colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    return(
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed} style={siderStyle}>
                <div className="demo-logo-vertical" />
                    <Menu theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={items}
                    />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer}}>
                    <Button type="text"
                        icon={ collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64
                        }}
                    />
                </Header>
                <Content style={{ margin : '24px 16px 0', overflow : 'initial'}}>
                    <div style={{
                        padding : 24,
                        textAlign : 'center',
                        background : colorBgContainer,
                        borderRadius : borderRadiusLG,
                    }}>
                        <p>long content</p>
                        {
                            Array.from({ length : 100}, (_, index) => (
                                <React.Fragment key={index}>
                                    {index % 20 === 0 && index ? 'more' : '...'}
                                    <br />
                                </React.Fragment>
                            ))
                        }
                    </div>
                </Content>
                <Footer style={{ textAlign : 'center'}}>
                    Ant Design ©{new Date().getFullYear()} Created By Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

const siderStyle: React.CSSProperties = {
    overflow: 'auto',
    height: '100vh',
    position: 'sticky',
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'thin',
    scrollbarGutter: 'stable',
  };

export default Home;