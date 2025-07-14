import FindPwd from "./Dialogs/FindPwd"
import { SelectDialog } from "./redux/DialogRedux"
import { useCRMSelector } from "./redux/IndexRedux"

const DialogType = {
    FindPwdDialog : "FindPwdDialog",
}

const DialogComponent = [
    {
        dialogType : DialogType.FindPwdDialog,
        component : <FindPwd />
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