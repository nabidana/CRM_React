import { JSX } from "react";

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
    per : number;
}

export type projectMap = {
    key : string;
    item : projectItem[];
}

export interface ProjectCardProps {
    id : any;
    text : JSX.Element;
    index : number;
    moveCard : (dragIndex : number, hoverIndex : number) => void;
}