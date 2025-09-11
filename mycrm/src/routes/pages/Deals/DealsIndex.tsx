import { Breadcrumb, Button, Dropdown, Layout, MenuProps, Space, theme } from "antd";
import React, { useMemo } from "react"
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { meusList } from "../../../types/CustomTypes";
import { getFilterItems } from "../../../function/FilterFun";
import { Content } from "antd/es/layout/layout";
import { DownOutlined, FilterOutlined } from "@ant-design/icons";

const handleMenuClick : MenuProps['onClick'] = (e) => {
    
}
const { useToken } = theme;

const DealsIndex : React.FC = () => {

    const { t } = useTranslation();
    const { token } = useToken();

    const filterItem = useMemo(() => {
        const items = getFilterItems();
        return {
            items//, onClick : handleMenuClick
        }
    },[t]);

    return(
        <Layout>
            <Content>
                <Breadcrumb
                    items={[
                        { title : <Link to="/index">Home</Link>},
                        { title : t('Deals')}
                    ]}
                >
                </Breadcrumb>
                <Dropdown 
                    menu={filterItem}
                    trigger={['click']}
                    popupRender={(menu) => (
                        <div
                            style={{
                                backgroundColor : token.colorBgElevated,
                                borderRadius: token.borderRadiusLG,
                                boxShadow: token.boxShadowSecondary
                            }}
                        >
                            {React.cloneElement(
                                menu as React.ReactElement<{
                                    style : React.CSSProperties
                                }>,
                                { style : {
                                    boxShadow: 'none',
                                }}
                            )}
                            <Space style={{ padding: 8 }}>
                                <Button type="primary">Click me!</Button>
                            </Space>
                        </div>
                    )}
                >
                    <Button onClick={(e) => e.preventDefault()}>
                        <Space>
                            <FilterOutlined />
                            {t('Filter')+''}
                            <DownOutlined />
                        </Space>
                    </Button>
                </Dropdown>
            </Content>
        </Layout>
    )
}

export default DealsIndex;