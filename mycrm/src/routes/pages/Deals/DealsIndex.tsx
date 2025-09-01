import { Breadcrumb } from "antd";
import React from "react"
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const DealsIndex : React.FC = () => {

    const { t } = useTranslation();

    return(
        <Breadcrumb
            items={[
                { title : <Link to="/index">Home</Link>},
                { title : t('Deals')}
            ]}
        >
        </Breadcrumb>
    )
}

export default DealsIndex;