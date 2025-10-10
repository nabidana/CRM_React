import { useEffect } from "react"
import CalenderDetail from "../Dialogs/CalenderDetail"
import FindPwd from "../Dialogs/FindPwd"
import { SelectDialog } from "../redux/DialogRedux"
import { useCRMSelector } from "../redux/IndexRedux"
import UserInfoDetail from "../Dialogs/UserInfoDetail"

const DialogType = {
    FindPwdDialog : "FindPwdDialog",
    CalenderDetailDialog : "CalenderDetailDialog",
    UserInfoDetailDialog : "UserInfoDetailDialog",
}

const DialogComponent = [
    {
        dialogType : DialogType.FindPwdDialog,
        component : <FindPwd />,
    },
    {
        dialogType : DialogType.CalenderDetailDialog,
        component : <CalenderDetail />,
    },
    {
        dialogType : DialogType.UserInfoDetailDialog,
        component : <UserInfoDetail />,
    }
]

const GlobalDialog = () => {
    const { dialogType } = useCRMSelector(SelectDialog);
    const findDialog = DialogComponent.find( (dialog) => {
        return dialog.dialogType === dialogType;
    });

    if(findDialog === undefined) return(<></>);

    const renderDialog = () => {
        return findDialog.component;
    }

    return(
        <>{renderDialog()}</>
    );
}

export default GlobalDialog;