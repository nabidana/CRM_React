import { theme, Typography } from "antd";

const Error404 : React.FC = () => {

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
            <p>
                <Typography.Title>
                    404 Error NotFound.
                </Typography.Title>
            </p>
        </div>
    )
}

export default Error404;