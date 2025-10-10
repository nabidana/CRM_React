import { Badge, BadgeProps, Breadcrumb, Calendar, CalendarProps, Flex, Radio, Select, Space, theme } from "antd";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import type { Dayjs } from 'dayjs';
import dayLocaleData from 'dayjs/plugin/localeData';
import { findItems, getScheduleListData } from "./SchedulesFun";
import { useEffect, useState } from "react";
import { dayDataType, SchedulesDataTypes } from "./SchedulesTypes";
import { useCRMDispatch } from "../../../redux/IndexRedux";
import { OpenDialog } from "../../../redux/DialogRedux";

const { useToken } = theme;

const SchedulesIndex : React.FC = () => {

    const { t, i18n } = useTranslation();
    const { token } = useToken();

    const dispatch = useCRMDispatch();

    const [ scheduleList, setScheduleList ] = useState<SchedulesDataTypes[]>([]);

    useEffect( () => {
        const nowyear = new Date().getFullYear();
        const data = getScheduleListData(nowyear);
        setScheduleList(data);
    },[])

    const cellRender : CalendarProps<Dayjs>['cellRender'] = (current, info) => {
        if(info.type === 'date'){
            const datelist = findItems(
                scheduleList, current.year(), (current.month()+1), 'daterender', current.date()
            );
            return dateCellRender(Array.isArray(datelist) ? datelist : []);
            // const dayDataList = scheduleList.filter(item => 
            //     item.year === current.year() && item.month === (current.month()+1)
            // );
            // const dataList = dayDataList.length === 1 ? 
            // dayDataList[0].item.filter(item => item.day === current.date())
            // :
            // [];
            // return dateCellRender(
            //     dataList.length === 1 ? dataList[0].item : []
            // );
        };
        if(info.type === 'month'){
            const monthnum = findItems(
                scheduleList, current.year(), (current.month()+1), 'monthrender'
            )
            return( (current.month()+1), typeof monthnum === 'number' ? monthnum : 0);
            // const dayDataList = scheduleList.filter(item => 
            //     item.year === current.year() && item.month === (current.month()+1)
            // );
            // return monthCellRender((current.month()+1), dayDataList.length);
        };
    }

    return(
        <div
            style={{
                padding : 24,
                background : token.colorBgContainer,
                borderRadius : token.borderRadiusLG
            }}
        >
            <Breadcrumb
                items={[
                    { title : <Link to="/index">Home</Link>},
                    { title : t('Schedules')}
                ]}
            />
            <Calendar
                onSelect={(current: Dayjs, _) => {
                    const itemlist = findItems(
                        scheduleList, current.year(), (current.month()+1), 'daterender', current.date()
                    );
                    dispatch(OpenDialog({
                        modalType : 'CalenderDetailDialog',
                        dayDataList : itemlist,
                    }));
                }}
                cellRender={cellRender}
                headerRender={ ({value, type, onChange, onTypeChange }) => {
                    const year = value.year();
                    const month = value.month();

                    const yearOptions = Array.from({ length : 20}, (_, i) => {
                        const label = year - 10 + i;
                        return { label, value : label};
                    });

                    const monthOptions = value.localeData().monthsShort()
                    .map( (label, index) => ({
                        label,
                        value : index,
                    }));

                    return(
                        <div
                            style={{
                                padding : 8,
                                textAlign : 'center'
                            }}
                        >
                            <Flex gap={8} justify="center" align="center">
                                <Radio.Group size="middle"
                                    onChange={(e) => onTypeChange(e.target.value)}
                                    value={type}
                                >
                                    <Radio.Button value="month">
                                        Month
                                    </Radio.Button>
                                    <Radio.Button value="year">
                                        Year
                                    </Radio.Button>
                                </Radio.Group>
                                <Select
                                    size="middle"
                                    popupMatchSelectWidth={false}
                                    value={year}
                                    options={yearOptions}
                                    onChange={(newYear) => {
                                        const now = value.clone().year(newYear);
                                        onChange(now);
                                    }}
                                />
                                <Select
                                    size="middle"
                                    popupMatchSelectWidth={false}
                                    value={month}
                                    options={monthOptions}
                                    onChange={(newMonth) => {
                                        const now = value.clone().month(newMonth);
                                        onChange(now);
                                    }}
                                />
                            </Flex>
                        </div>
                    )
                }}
            />
        </div>
    )
}

export default SchedulesIndex;

const monthCellRender = (month : number, monthLeng : number) => {
    return month % 3 === 0 ? (
        <div className="notes-month">
            <section>{month+'월'}</section>
            <span>{monthLeng.toString()}</span>
        </div>
    ) : null;
}

const dateCellRender = (item : dayDataType[] | []) => {
    return(
        <Space direction="vertical">
            {
                item.map( (val) => (
                    <Badge key={val.id} status={val.type as BadgeProps['status']} text={val.content} />
                    // <li key={val.id}>
                    // </li>
                ))
            }
        </Space>
    )
}

// const dateCellRender = (year : number, month : number) => {
//     const listdata = getScheduleListData(year, month);
//     return(
//         <ul className="events">
//             {listdata.map( (item) => (
//                 <li key={item.}>

//                 </li>
//             ))}
//         </ul>
//     )
// }