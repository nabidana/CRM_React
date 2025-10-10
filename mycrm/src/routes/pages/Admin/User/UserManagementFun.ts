import { t } from "i18next";
import { KeyLabelType, userDataDetailType } from "../../../../global/GlobalTypes";


export const getUserDetailTabList = (data : userDataDetailType) : KeyLabelType[] => {
    const result : KeyLabelType[] = [];

    if(data.defaultInfo !== undefined){
        result.push({
            key : 'defaultInfo',
            label : t('DefaultInfo'),
        });
    }
    if(data.teamInfo !== undefined){
        result.push({
            key : 'teamInfo',
            label : t('TeamInfo'),
        })
    }
    if(data.projectInfo.length > 0){
        result.push({
            key : 'projectInfo',
            label : t('ProjectInfo'),
        })
    }
    if(data.otherInfo !== undefined){
        result.push({
            key : 'otherInfo',
            label : t('OtherInformation')
        })
    }

    return result;
}