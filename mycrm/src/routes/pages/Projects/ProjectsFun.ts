import { projectItemType, projectMap } from "./ProjectsTypes";

// 프로젝트 목록 뽑기
export const getProjectItems = () => {
    let lv1 : projectItemType[] = testMakeItem(1);
    let lv2 : projectItemType[] = testMakeItem(2);
    let lv3 : projectItemType[] = testMakeItem(3);
    let lv4 : projectItemType[] = testMakeItem(4);
    let lv5 : projectItemType[] = testMakeItem(5);

    const projectItems : projectMap[] = [
        {
            key : 'InitiationPhase', item : lv1, 
            backgroundcolor : '#B2DFDB', textcolor : '#00796B'
        },
        {
            key : 'PlanningPhase', item : lv2,
            backgroundcolor : '#BBDEFB', textcolor : '#1565C0'
        },
        {
            key : 'ExecutionPhase', item : lv3,
            backgroundcolor : '#FFCC80', textcolor : '#E65100'
        },
        {
            key : 'MonitoringPhase', item : lv4,
            backgroundcolor : '#CE93D8', textcolor : '#6A1B9A'
        },
        {
            key : 'ClosingPhase', item : lv5,
            backgroundcolor : '#A5D6A7', textcolor : '#2E7D32'
        },
    ]

    return projectItems;
}

const testMakeItem = (num : number) => {
    let lv : projectItemType[] = [];
    for(let i = 0 ; i < 5; i++){
        let item : projectItemType = {
            key : num.toString()+i.toString(),
            title : 'test' + num.toString() + '-' + i.toString(),
            content : 'test test test',
            per : (10 * num + i)
        }
        lv.push(item);
    }
    return lv;
}