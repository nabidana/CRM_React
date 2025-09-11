import { MenuProps } from "antd"
import { t } from "i18next";

export const getFilterItems = () => {
    let filters : MenuProps['items'] = [];
    filters.push({
        key : '1',
        label : ''+t('Customer')
    });
    filters.push({
        key : '2',
        label : ''+t('ProjetName')
    })

    return filters;
}