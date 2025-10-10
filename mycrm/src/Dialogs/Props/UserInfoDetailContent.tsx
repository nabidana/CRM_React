import { Badge, Space, Typography } from "antd";
import { teamDataType, userDataDetailType, userDataType } from "../../global/GlobalTypes";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

type UserInfoDetailContenttype = {
    getkey : string;
    data : userDataDetailType | undefined;
}

const UserInfoDetailContent : React.FC<UserInfoDetailContenttype> = ({getkey , data}) => {

    const { t } = useTranslation();
    
    useEffect(()=>{
        console.log('data : ', data);
    },[])

    if(getkey === 'defaultInfo' && data !== undefined && data.defaultInfo !== undefined){
        const setdata = data.defaultInfo;
        return(
            <Space direction="vertical">
                {
                    Object.keys(setdata).map( (keyname) => {
                        return keyname !== 'key' ?
                            <Badge key={getkey+keyname} status="success"
                                text={`${keyname} : ${setdata[keyname as keyof userDataType]}`}
                            />
                            :
                            <></>
                    })
                }
            </Space>
        )
    }else if(getkey === 'teamInfo' && data !== undefined && data.teamInfo !== undefined){
        const setdata = data.teamInfo;
        return(
            <Space direction="vertical">
                {
                    Object.keys(setdata).map( (keyname) => (
                        <Badge key={getkey+keyname} status="success"
                            text={`${keyname} : ${setdata[keyname as keyof teamDataType]}`}
                        />
                    ))
                }
            </Space>
        )
    }else if(getkey === 'projectInfo' && data !== undefined){
        const setdata = data.projectInfo;
        return(
            <Space direction="vertical">
                {
                    setdata.map( (item) => {
                        return(
                            <Space direction="vertical">
                                <Badge key={getkey+item.key}
                                    status={item.per > 70 ? 'success' : 'processing'}
                                    text={item.title}
                                />
                                <Typography.Text
                                    style={{
                                        marginLeft : '5px'
                                    }}
                                >
                                    {item.content}
                                </Typography.Text>
                                <Typography.Text
                                    style={{
                                        marginLeft : '5px'
                                    }}
                                >
                                    {item.per+'%'}
                                </Typography.Text>
                            </Space>
                        )
                    })
                }
            </Space>
        )
    }else if(getkey === 'otherInfo' && data !== undefined && data.otherInfo !== undefined){
        const setdata = data.otherInfo;
        return(
            <Typography.Text>
                {setdata}
            </Typography.Text>
        )
    }else{
        return(
            <></>
        )
    }
}

export default UserInfoDetailContent;