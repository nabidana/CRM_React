import { t } from "i18next";
import { dealItem } from "../types/CustomTypes"
import { JSX } from "react";


// 거래 목록 뱉기
export const getDealItems = () => {
    let deals : dealItem[] = [];
    
    for(let i = 0 ; i < 6; i++){
        const testdeal : dealItem = {
            key : i.toString(),
            title : t('Title')+i.toString(),
            taglist : i === 1 ? ['New', 'Important'] : [],
            content : 'test test test',
            date : '2025-09-15',
            value : '1,000,000$',
            reguser : 'testuser',
            customer : 'testcustom'+i.toString()
        }
        deals.push(testdeal);
    }

    return deals;
}