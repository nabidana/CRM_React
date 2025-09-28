import { projectItem, projectMap } from "../types/CustomTypes";

// 프로젝트 목록 뽑기
export const getProjectItems = () => {
    let lv1 : projectItem[] = [];
    let lv2 : projectItem[] = [];
    let lv3 : projectItem[] = [];
    let lv4 : projectItem[] = [];
    let lv5 : projectItem[] = [];

    for(let i = 0 ; i < 5; i++){
        let item : projectItem = {
            key : i.toString(),
            title : 'test' + i.toString(),
            content : 'test test test',
            per : (10 + i)
        }
        lv1.push(item);
        item.per = (20 + i);
        lv2.push(item);
        item.per = (30 + i);
        lv3.push(item);
        item.per = (40 + i);
        lv4.push(item);
        item.per = (50 + i);
        lv5.push(item);
    }

    const projectItems : projectMap[] = [
        {key : 'InitiationPhase', item : lv1},
        {key : 'PlanningPhase', item : lv2},
        {key : 'ExecutionPhase', item : lv3},
        {key : 'MonitoringPhase', item : lv4},
        {key : 'ClosingPhase', item : lv5},
    ]

    return projectItems;
}