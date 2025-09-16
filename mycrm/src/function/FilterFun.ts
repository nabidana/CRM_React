import { t } from "i18next";
import { filterList } from "../types/CustomTypes";

// 필터 목록 값 return 함수
export const getFilterItems = () => {
    let filters : filterList[] = [];
    filters.push({
        key : '1',
        labelName : ''+t('Customer')
    });
    filters.push({
        key : '2',
        labelName : ''+t('ProjetName')
    })

    return filters;
}

// 필터 선택 시, input 앞에 filter 목록 return 함수
export const getFilterTags = () => {

}