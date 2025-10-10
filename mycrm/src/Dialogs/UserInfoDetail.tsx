import { useTranslation } from "react-i18next";
import { useCRMDispatch, useCRMSelector } from "../redux/IndexRedux";
import { CloseDialog, SelectDialog } from "../redux/DialogRedux";
import { Badge, Button, Card, Modal, Space, Typography } from "antd";
import { SelectAuth } from "../redux/AuthRedux";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { navigateTo } from "../routes/router";
import { GetUserDetailInfo, SelectAdminApi } from "../redux/AdminApiRedux";
import { KeyLabelType, teamDataType, userDataDetailType, userDataType } from "../global/GlobalTypes";
import { getUserDetailTabList } from "../routes/pages/Admin/User/UserManagementFun";
import { projectItemType } from "../routes/pages/Projects/ProjectsTypes";
import UserInfoDetailContent from "./Props/UserInfoDetailContent";


const UserInfoDetail : React.FC = () => {

    const { t } = useTranslation();
    const { visible, userDataDetail } = useCRMSelector(SelectDialog);
    const { userAuth, userInfo } = useCRMSelector(SelectAuth);
    const { userList } = useCRMSelector(SelectAdminApi);

    const dispatch = useCRMDispatch();

    const [ tabList, setTabList ] = useState<KeyLabelType[]>([]);
    const [ userInfoMap, setUserInfoMap ] = useState<userDataDetailType>();
    const [ tabKey, setTabKey ] = useState<string>('');

    useEffect(() => {
        if(userAuth === 'admin' && userInfo !== undefined){
            const getUserDetailList = async() => {
                const result = await dispatch(GetUserDetailInfo(userDataDetail)).unwrap();
                setUserInfoMap(result);
            }
            getUserDetailList();
        }else{
            navigateTo('/');
            closeDialog();
        }
    },[]);

    useEffect(() => {
        if(userInfoMap !== undefined){
            const gettablist = getUserDetailTabList(userInfoMap);
            setTabList(gettablist);
            setTabKey('defaultInfo');
        }
    },[userInfoMap])

    const renderItem = useCallback( () => {
        return(
            <UserInfoDetailContent 
                getkey={tabKey} 
                data={userInfoMap}
            />
        )
    }, [tabKey, userInfoMap])

    const closeDialog = () => {
        dispatch(CloseDialog());
    }

    return(
        <Modal
            title=
                {<Typography.Title style={{ textAlign : 'center' }}>
                    {t('UserDetail')}
                </Typography.Title>}
            open={visible}
            footer={
                <Button
                    color="primary"
                    variant="solid"
                    onClick={() => closeDialog()}
                    style={{
                        marginRight : '5%',
                        width : '20%',
                        height : '5%',
                        fontSize : '200%'
                    }}
                >
                    {t("Cancel")}
                </Button>
            }
            onCancel={closeDialog}
        >
            <Card
                tabList={tabList}
                activeTabKey={tabKey}
                onTabChange={(key) => {
                    setTabKey(key);
                }}
            >
                {renderItem()}
            </Card>
        </Modal>
    )
}

export default UserInfoDetail;
