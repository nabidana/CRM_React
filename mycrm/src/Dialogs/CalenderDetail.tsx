import { useTranslation } from "react-i18next"
import { useCRMDispatch, useCRMSelector } from "../redux/IndexRedux";
import { CloseDialog, SelectDialog } from "../redux/DialogRedux";
import { Button, Card, Divider, List, Modal, Skeleton, Space, Typography } from "antd";
import { useEffect } from "react";

const CalenderDetail : React.FC = () => {

    const { t } = useTranslation();
    const { visible, dayDataList } = useCRMSelector(SelectDialog);
    const dispatch = useCRMDispatch();

    const closeDialog = () => {
        dispatch(CloseDialog());
    }

    return(
        <Modal
            title={
                <Typography.Title style={{ textAlign : 'center' }}>
                    {t('CalenderDetail')}
                </Typography.Title>
            }
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
            <List
                style={{
                    height : '400px',
                    overflowY : 'auto'
                }}
                itemLayout="horizontal"
                dataSource={dayDataList}
                renderItem={(item, idx) => (
                    <List.Item key={item.id}>
                        <Space direction="vertical">
                            <Typography.Title level={3}>
                                {item.id}
                            </Typography.Title>
                            <Typography.Text>
                                {item.content}
                            </Typography.Text>
                        </Space>
                    </List.Item>
                )}
            />
        </Modal>
    )
}

export default CalenderDetail;