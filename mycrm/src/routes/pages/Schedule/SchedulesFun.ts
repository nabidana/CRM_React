import type { Dayjs } from 'dayjs';
import { dayDataListType, dayDataType, SchedulesDataTypes } from './SchedulesTypes';

export const getScheduleListData = (year : number) : SchedulesDataTypes[] => {

    let dataList : SchedulesDataTypes[] = [];
    for(let i = 1; i <= 12; i++){
        let dayDataList : dayDataListType[] = [];
        for(let j = 0 ; j < 5; j++){
            let dayList : dayDataType[] = [];
            for(let z = 0; z <= j; z++){
                const dayData : dayDataType = {
                    id : year.toString()+i.toString()+j.toString()+z.toString(),
                    type : 'success',
                    content : year.toString()+'-'+i.toString()+' : '+z.toString()
                }
                dayList.push(dayData);
            }
            dayDataList.push({
                day : (j+1) * 4,
                item : dayList
            });
        }
        dataList.push({
            year : year,
            month : i,
            item : dayDataList
        });
    }

    return dataList;
}