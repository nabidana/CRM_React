import { JSX } from "react";

export type projectItemType = {
    key : string;
    title : string;
    content : string;
    per : number;
}

export type projectMap = {
    key : string;
    item : projectItemType[];
    textcolor : string;
    backgroundcolor : string;
}

export interface ProjectCardProps {
    id : any;
    text : JSX.Element;
    index : number;
    moveCard : (dragIndex : number, hoverIndex : number, sourceIndex : number, targetIndex : number) => void;
    parentIndex : number;
}
