export type LocaleTypes = '' | 'ko' | 'en';

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

export type dealItem = {
    key : string;
    title : string;
    taglist : string[];
    content : string;
    date : string;
    value : string;
    reguser : string;
    customer : string;
}

export type projectItem = {
    key : string;
    title : string;
    content : string;
}