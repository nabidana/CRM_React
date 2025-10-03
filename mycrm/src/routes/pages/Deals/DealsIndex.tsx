import { Badge, Breadcrumb, Button, Card, Checkbox, Col, Dropdown, Input, Layout, List, MenuProps, Row, Space, Tag, theme, Typography } from "antd";
import React, { useMemo } from "react"
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { meusList } from "../../../global/GlobalTypes";
import { getFilterItems } from "../../../global/FilterFun";
import { Content } from "antd/es/layout/layout";
import { DownOutlined, FilterOutlined } from "@ant-design/icons";
import testimg from '../../images/logitec_102.jpg';
import { getDealItems } from "./DealFun";

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

    const dealItem = useMemo( () => {
        return getDealItems();
    },[t]);

    const makeTag = (name : string) => {
        if(name === 'New'){
            return <Tag color="green">{t('New')+''}</Tag>
        }else if(name === 'Important'){
            return <Tag color="gold">{t('Important')+''}</Tag>
        }else{
            return <Tag>{name}</Tag>
        }
    }

    return(
        <div style={{
            padding : 24,
            background : token.colorBgContainer,
            borderRadius : token.borderRadiusLG
        }}>
            <Breadcrumb
                items={[
                    { title : <Link to="/index">Home</Link>},
                    { title : t('Deals')}
                ]}
            />
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
            <List style={{
                    marginTop : '5vh'
                }}
                grid={{
                    gutter : 16,
                    column : 4
                }}
                dataSource={dealItem}
                renderItem={(val) => (
                    <List.Item
                    >
                        <Card
                        >
                            <Space>
                                {
                                    val.taglist.map( (tagname) => {
                                        return makeTag(tagname);
                                    })
                                }
                            </Space>
                            <p>
                                <Typography.Title level={3}>
                                    {val.title}
                                </Typography.Title>
                            </p>
                            <p>
                                {val.content}
                            </p>
                            <p>
                                <Typography.Text strong>
                                    {t('Customer')+''} : {val.customer}
                                </Typography.Text>
                            </p>
                            <p>
                                <Typography.Text strong>
                                    {t('Registrant')+''} : {val.reguser}
                                </Typography.Text>
                            </p>
                            <p>
                                <Typography.Text strong>
                                    {t('Date')+''} : {val.date}
                                </Typography.Text>
                            </p>
                            <p>
                                <Typography.Text strong>
                                    {t('Price')+''} : {val.value}
                                </Typography.Text>
                            </p>
                        </Card>
                    </List.Item>
                )}
            >
            </List>
        </div>
    )
}

const cardStyle : React.CSSProperties = {
    marginTop : '3vh',
    width : '10vh',
    height : '15vh',
    maxHeight : '15vh'
}

export default DealsIndex;