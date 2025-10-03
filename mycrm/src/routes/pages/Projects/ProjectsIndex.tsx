import { Breadcrumb, Button, Card, Checkbox, Dropdown, List, Space, theme, Typography } from "antd";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getFilterItems } from "../../../global/FilterFun";
import { DownOutlined, FilterOutlined, UnorderedListOutlined } from "@ant-design/icons";
import ProjectCard from "./Props/ProjectCard";
import { getProjectItems } from "./ProjectsFun";
import { projectItemType, projectMap } from "./ProjectsTypes";
import update from 'immutability-helper';

const { useToken } = theme;

const ProjectsIndex : React.FC = () => {

    const { t } = useTranslation();
    const { token } = useToken();

    const [ projectLists, setProjectLists ] = useState<projectMap[]>([]);

    useEffect( () => {
        const getprojectLists = getProjectItems()
        setProjectLists([...getprojectLists]);
    },[]);
    
    const filterItem = useMemo(() => {
        return getFilterItems();
    },[t]);
    
    const renderProjectCard = useCallback( (item : projectItemType) => {
        return(
            <Card>
                <Space>
                    <UnorderedListOutlined style={{
                            fontSize : '150%'
                        }} 
                    />
                    <div>
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
                    </div>
                </Space>
            </Card>
        )
    }, []);

    const moveCard = useCallback( (
        dragIndex : number, hoverIndex : number
        , sourceIndex : number, targetIndex : number
    ) => {
        setProjectLists( (projectlist : projectMap[]) => {
            if(sourceIndex === targetIndex){
                return update(projectlist, {
                    [sourceIndex] : {
                        $set : {
                            key : '',
                            item : update(projectlist[sourceIndex].item, {
                                $splice : [
                                    [dragIndex, 1],
                                    [hoverIndex, 0, projectlist[sourceIndex].item[dragIndex] as projectItemType],
                                ],
                            }),
                        }
                    }
                })
            }else{
                return update(projectlist, {
                    [targetIndex] : {
                        $set : {
                            key : projectlist[targetIndex].key,
                            item : update(projectlist[targetIndex].item, {
                                $splice : [
                                    [hoverIndex, 0, projectlist[sourceIndex].item[dragIndex] as projectItemType],
                                ]
                            })
                        }
                    },
                    [sourceIndex] : {
                        $set : {
                            key : projectlist[sourceIndex].key,
                            item : update(projectlist[sourceIndex].item, {
                                $splice : [
                                    [dragIndex, 1]
                                ]
                            })
                        }
                    },
                })
            }
        })
    },[])
    // update(projectlist, {
    //     [key] : {
    //         $set : {
    //             key : '',
    //             item : update(projectlist[key].item, {
    //                 $splice : [
    //                     [dragIndex, 1],
    //                     [hoverIndex, 0, projectlist[key].item[dragIndex] as projectItemType],
    //                 ],
    //             }),
    //         }
    //     }
    // })
    // {
    //     if(sourceIndex === targetIndex){
    //         return update(projectlist, {
    //             [sourceIndex] : {
    //                 $set : {
    //                     key : '',
    //                     item : update(projectlist[sourceIndex].item, {
    //                         $splice : [
    //                             [dragIndex, 1],
    //                             [hoverIndex, 0, projectlist[sourceIndex].item[dragIndex] as projectItemType],
    //                         ],
    //                     }),
    //                 }
    //             }
    //         })
    //     }else{
    //         return update(projectlist, {
    //             [targetIndex] : {
    //                 $set : {
    //                     key : projectlist[targetIndex].key,
    //                     item : update(projectlist[targetIndex].item, {
    //                         $splice : [
    //                             [hoverIndex, 0, projectlist[sourceIndex].item[dragIndex] as projectItemType],
    //                         ]
    //                     })
    //                 }
    //             },
    //             [sourceIndex] : {
    //                 $set : {
    //                     key : projectlist[sourceIndex].key,
    //                     item : update(projectlist[sourceIndex].item, {
    //                         $splice : [
    //                             [dragIndex, 1]
    //                         ]
    //                     })
    //                 }
    //             },
    //         })
    //     }
    // }

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
            <List style={{
                    marginTop : '5%'
                }}
                grid={{
                    gutter : 16,
                    column : 5
                }}
                dataSource={projectLists}
                renderItem={(item : projectMap, parentIdx) => (
                    <List style={{
                            marginTop : '5%',
                            width : '90%'
                        }}
                        itemLayout="horizontal"
                        dataSource={item.item}
                        renderItem={(val, idx) => (
                            <ProjectCard
                                id={val.key}
                                index={idx}
                                key={val.key}
                                text={renderProjectCard(val)}
                                moveCard={moveCard}
                                parentIndex={parentIdx}
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