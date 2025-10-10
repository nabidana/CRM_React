import { projectItemType } from "../routes/pages/Projects/ProjectsTypes";

export type LocaleTypes = '' | 'ko' | 'en';

export type menuGroupList = {
    keyName : string;
    labelName : string;
    childList : meusList[];
    element? : meusList;
}

export type meusList = {
    labelName : string;
    iconName : string;
    linkName : string;
}

export type filterList = {
    key : string;
    labelName : string;
}

export type filterTagList = {
    
}

export type AuthTypes = '' | 'user' | 'admin' | 'guest';

export type userType = {
    id : string;
    pwd : string;
    auth? : AuthTypes;
    loginstate? : boolean;
}

export type apiResultType = {
    state : number;
    msg : string;
    result : any;
}

export type activeStateType = '' | 'active' | 'enable' | 'lock' | 'wait';

export type userDataType = {
    key : string;
    id : string;
    name : string;
    auth : AuthTypes;
    activestate : activeStateType;
    jobgrade : string;
}

export type userDataDetailType = {
    defaultInfo : userDataType | undefined;
    teamInfo : teamDataType | undefined;
    projectInfo : projectItemType[];
    otherInfo : string | undefined;
}

export type teamDataType = {
    key : string;
    name : string;
}

export type KeyLabelType = {
    key : string;
    label : string;
}