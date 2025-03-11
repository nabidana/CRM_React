import { theme } from "antd";
import React from "react"

const Test : React.FC = () => {
    const {
        token : { colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    
    return(
        <div style={{
            padding : 24,
            textAlign : 'center',
            background : colorBgContainer,
            borderRadius : borderRadiusLG,
        }}>
            <p>long content</p>
            {
                Array.from({ length : 100}, (_, index) => (
                    <React.Fragment key={index}>
                        {index % 20 === 0 && index ? 'more' : '...'}
                        <br />
                    </React.Fragment>
                ))
            }
        </div>
    )
}

export default Test;