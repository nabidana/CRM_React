import { Breadcrumb, Button, Checkbox, Dropdown, Input, Layout, MenuProps, Space, theme } from "antd";
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
        return getFilterItems();
    },[t]);

    const tagItem = useMemo( () => {

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
                <Space style={{
                    marginLeft : '10vh',
                    marginTop : '2vh'
                }}>
                    <Dropdown
                        trigger={['click']}
                        popupRender={() => (
                            <div
                                style={{
                                    backgroundColor : token.colorBgElevated,
                                    borderRadius: token.borderRadiusLG,
                                    boxShadow: token.boxShadowSecondary
                                }}
                            >
                                {/* {React.cloneElement(
                                    menu as React.ReactElement<{
                                        style : React.CSSProperties
                                    }>,
                                    { style : {
                                        boxShadow: 'none',
                                    }}
                                )} */}
                                <div style={{ padding: 8 }}>
                                    {filterItem.map( (val) => {
                                        return(
                                            <span key={val.key}>
                                                <Checkbox>{val.labelName}</Checkbox>
                                                <br />
                                            </span>
                                        )
                                    })}
                                </div>
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
                    <Space.Compact style={{
                        marginLeft : '3vh',
                        width : '100vh'
                    }}>
                        <Input />
                        <Button type="primary">Search</Button>
                    </Space.Compact>
                </Space>
            </Content>
        </Layout>
    )
}

export default DealsIndex;