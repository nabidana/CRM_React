import React, { useCallback, useEffect, useRef, useState} from "react";
import { Button, Layout, Menu, theme } from "antd";
import CustomHeader from "../../components/CustomHeader";
import CustomSideBar from "../../components/CustomSideBar";
import CustomFooter from "../../components/CustomFooter";
import { Outlet, ScrollRestoration } from "react-router-dom";
const { Header, Footer, Sider, Content} = Layout;
const DefaultLayout : React.FC = () => {
    const {
        token : { colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    //[현재 state, state 를 변경하기 위한 함수]
    const [ collapsed, setCollapsed] = useState(false);
    const siderRef = useRef<HTMLDivElement>(null);
    const [ dimensions, setDimensions ] = useState(0);

    const setWidth = (val:boolean) => {
        setCollapsed(val);
        setTimeout(() => {
            if(siderRef.current){
                const width = siderRef.current.offsetWidth;
                //const height = siderRef.current.offsetHeight;
                setDimensions(width);
            }
        }, 200);
    }
    //최초에 한번 실행
    useEffect(() => {
        if(siderRef.current){
            const width = siderRef.current.offsetWidth;
            //const height = siderRef.current.offsetHeight;
            setDimensions(width);
        }
    }, []);

    return(
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed} style={siderStyle} ref={siderRef}>
                <CustomSideBar />
            </Sider>
            <Layout>
                <Header style={{ 
                    display: 'flex', alignItems: 'center', padding: 0, background: colorBgContainer, position : 'fixed',
                    top : 0, left : dimensions,
                }}>
                    <CustomHeader
                        collapsed={collapsed}
                        setCollapsed={setWidth}
                    />
                </Header>
                <Content style={{ margin : '24px 16px 0', overflow : 'initial'}}>
                    <Outlet />
                </Content>
                <Footer style={{ textAlign : 'center'}}>
                    <CustomFooter />
                </Footer>
            </Layout>
            <ScrollRestoration />
        </Layout>
    );
};

const siderStyle: React.CSSProperties = {
    overflow: 'auto',
    height: '100vh',
    position: 'fixed',
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'thin',
    scrollbarGutter: 'stable',
};

export default DefaultLayout;