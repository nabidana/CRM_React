import { Breadcrumb, Button, Card, Checkbox, Dropdown, List, Space, theme, Typography } from "antd";
import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getFilterItems } from "../../../function/FilterFun";
import { DownOutlined, FilterOutlined } from "@ant-design/icons";
import { getProjectItems } from "../../../function/ProjectsFun";
import ProjectCard from "./Props/ProjectCard";
import { projectItem } from "../../../types/CustomTypes";

const { useToken } = theme;

const ProjectsIndex : React.FC = () => {

    const { t } = useTranslation();
    const { token } = useToken();

    const filterItem = useMemo(() => {
        return getFilterItems();
    },[t]);

    const projectItem = useMemo( () => {
        // const projectItemList = getProjectItems();
        // return projectItemList[0];
        return getProjectItems();
    },[t]);

    const renderProjectCard = useCallback( (item : projectItem) => {
        return(
            <Card>
                <Space></Space>
                <p>
                    <Typography.Title level={3}>
                        {item.title}
                    </Typography.Title>
                </p>
                <p>
                    {item.content}
                </p>
                <p>
                    <Typography.Text strong>
                        {item.per.toString()+'%'}
                    </Typography.Text>
                </p>
            </Card>
        )
    }, []);

    const moveCard = useCallback( (dragIndex : number, hoverIndex : number) => {
        
    },[])

    return(
        <div style={{
            padding : 24,
            background : token.colorBgContainer,
            borderRadius : token.borderRadiusLG
        }}
        >
            <Breadcrumb
                items={[
                    { title : <Link to="/index">Home</Link>},
                    { title : t('Projects')}
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
            </Space>
            <List style={{
                    marginTop : '5vh'
                }}
                grid={{
                    gutter : 16,
                    column : 4
                }}
                dataSource={projectItem}
                renderItem={(item) => (
                    <List style={{
                            marginTop : '5vh'
                        }}
                        itemLayout="horizontal"
                        dataSource={item.item}
                        renderItem={(val, idx) => (
                            <ProjectCard
                                id={val.key}
                                index={idx}
                                key={val.key}
                                text={renderProjectCard(val)}
                                moveCard={() => {}}
                            />
                        )}
                    />
                )}
            />
            {/* <List style={{
                    marginTop : '5vh'
                }}
                itemLayout="horizontal"
                dataSource={projectItem.item}
                renderItem={(val, idx) => (
                    <ProjectCard
                        id={val.key}
                        index={idx}
                        key={val.key}
                        text={renderProjectCard(val)}
                        moveCard={() => {}}
                    />
                )}
            ></List> */}
        </div>
    )
}

export default ProjectsIndex;