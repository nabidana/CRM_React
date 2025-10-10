import React, { useEffect, useMemo, useState } from "react";
import { Menu } from "antd";
import { useTranslation } from "react-i18next";
import { useCRMDispatch, useCRMSelector } from "../../redux/IndexRedux";
import { GetMenuItems, SelectApi } from "../../redux/ApiRedux";
import { useLocation } from "react-router-dom";
import { makeMenu } from "../../global/MenuFun";

const CustomSideBar : React.FC = () => {

    const dispatch = useCRMDispatch();
    const { t } = useTranslation();
    const { userMenuList } = useCRMSelector(SelectApi);
    const location = useLocation();
    const [ selectUrl, setSelectUrl] = useState<string>('');

    useEffect( () => {
        const getmenus = async() => {
            await dispatch(GetMenuItems()).unwrap();
        }
        getmenus();
    },[]);

    useEffect( () => {
        console.log(location.pathname.substring(1));
        setSelectUrl(location.pathname.substring(1));
    },[location])

    // useMemo : 함수의 결과를 메모이제이션하여 비용이 많이 드는 계산해서 컴포넌트의 성능을 최적화
    // 종속성이 변경되지 않았다면, React는 함수를 다시 실행하지 않고 이전에 메모한 값을 반환
    // 변경되었다면, 함수를 실행하고 값을 새로 계산하고 메모
    // React는 내부적으로 각 useMemo 훅에 대해 메모된 값을 저장하기 위해 메모이제이션 캐시를 사용
    const siderItem = useMemo(() => {
        return makeMenu(userMenuList);
    }, [userMenuList, t]);
        
    return(
        <>
        <div className="demo-logo-vertical" />
            <Menu theme="dark"
                style={menuStyle}
                mode="inline"
                selectedKeys={[selectUrl]}
                items={siderItem}
            />
        </>
    )
}

export default CustomSideBar;

const menuStyle: React.CSSProperties = {
    marginTop : '40%',
}