export interface SchedulesDataTypes{
    year : number;
    month : number;
    item : dayDataListType[]
}

export interface dayDataListType{
    day : number;
    item : dayDataType[];
}

export interface dayDataType{
    type : string;
    content : string;
    id : string;
}