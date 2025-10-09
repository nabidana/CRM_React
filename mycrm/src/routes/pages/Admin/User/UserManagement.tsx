import { Breadcrumb, Button, Select, Space, Table, TableColumnsType, TableProps, theme, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { useCRMDispatch, useCRMSelector } from "../../../../redux/IndexRedux";
import { GetUserItems, SelectAdminApi } from "../../../../redux/AdminApiRedux";
import { userDataType } from "../../../../global/GlobalTypes";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const { useToken } = theme;

const UserManagement : React.FC = () => {

    const { t } = useTranslation();
    const { token } = useToken();

    const dispatch = useCRMDispatch();
    const navigate = useNavigate();
    const { userList } = useCRMSelector(SelectAdminApi);

    const [ pageSize, setPageSize ] = useState<number>(10);

    useEffect( () => {
        const getUserItems = async() => {
            try {
                await dispatch(GetUserItems()).unwrap();
            } catch (error) {
                navigate('/');
            }
        }
        getUserItems();
    },[]);

    const columns : TableColumnsType<userDataType> = [
        {
            title : t('UserId')+'',
            dataIndex : 'id',
        },
        {
            title : t('UserName')+'',
            dataIndex : 'name',
        },
        {
            title : t('UserAuthType')+'',
            dataIndex : 'auth'
        },
        {
            title : t('UserActiveState')+'',
            dataIndex : 'activestate',
        },
        {
            title : t('jobGrade')+'',
            dataIndex : 'jobgrade',
        }
    ]

    const rowSelection : TableProps<userDataType>['rowSelection'] = {

    }

    return(
        <div style={{
            padding : 24,
            background : token.colorBgContainer,
            borderRadius : token.borderRadiusLG
        }}>
            <Breadcrumb
                items={[
                    { title : <Link to="/index">Home</Link> },
                    { title : t('UserManagement') }
                ]}
            />
            <Space size='middle'
                style={{
                    width : '100%',
                    justifyContent : 'flex-end'
                }}
            >
                <Button type="primary">TEST</Button>
                <Typography.Text>
                    PAGE : 
                </Typography.Text>
                <Select
                    defaultValue={10}
                    onChange={(value) => {
                        setPageSize(value);
                    }}
                    options={[
                        { value : 10, label : '10' },
                        { value : 20, label : '20' },
                        { value : 30, label : '30' },
                        { value : 40, label : '40' },
                        { value : 50, label : '50' },
                    ]}
                />
            </Space>
            <Table<userDataType>
                style={{
                    marginTop : '3%'
                }}
                rowSelection={{ type : 'checkbox', ...rowSelection}}
                columns={columns}
                dataSource={userList}
                pagination={{ pageSize : pageSize }}
            />
        </div>
    )
}

export default UserManagement;