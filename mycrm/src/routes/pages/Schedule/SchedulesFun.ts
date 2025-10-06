import type { Dayjs } from 'dayjs';
import { dayDataListType, dayDataType, SchedulesDataTypes } from './SchedulesTypes';

export const getScheduleListData = (year : number) : SchedulesDataTypes[] => {

    let dataList : SchedulesDataTypes[] = [];
    for(let i = 1; i <= 12; i++){
        let dayDataList : dayDataListType[] = [];
        for(let j = 0 ; j < 5; j++){
            let dayList : dayDataType[] = [];
            for(let z = 0; z <= j*2; z++){
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

// 단순 for문이 효율성이 가장 뛰어나다. (대용량 데이터)
export const findItems = (
    list : SchedulesDataTypes[], 
    year : number, month : number, 
    mode : 'daterender' | 'monthrender' | 'calenderselect',
    day? : number
) : dayDataType[] | number => {
    if(mode === 'daterender' || mode === 'calenderselect'){
        let resultList : dayDataType[] = [];
    
        for(let i = 0; i < list.length; i++){
            const row = list[i];
            let cancel = false;

            if(row.year === year && row.month === month){
                const rowitem = row.item;
                if(rowitem.length === 0) continue;

                for(let j = 0; j < rowitem.length; j++){
                    const row2 = rowitem[j];

                    if(row2.day === day){
                        resultList = row2.item;
                        cancel = true;
                        break;
                    }
                }
            }

            if(cancel){
                break;
            }
        }
        return resultList;
    }else if(mode === 'monthrender'){
        let resultnum : number = 0;

        for(let i = 0; i < list.length; i++){
            const row = list[i];
            if(row.year === year && row.month === month){
                resultnum = row.item.length;
                break;
            }
        }

        return resultnum;
    }else{
        return [];
    }
}