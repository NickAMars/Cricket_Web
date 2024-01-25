import { Box, TextField } from "@mui/material";
import styled from "styled-components";
import { theme } from "@src/theme";


const EmailTextField = styled(Box)`
    display: flex;
    align-items: flex-end;
    color: #fff;
`;
const InputField = styled(TextField)`
    height: 48px;
    width: 540px;
    & > input {
        background-color: white;
        font-size: ${props => props.theme.typography.body1.fontSize};
    }
`
export const EmailTextFieldComponent: React.FC<{}> = (props) => {

    return (
        <EmailTextField >
            <InputField color="info" label="Email Address" variant="outlined" />
        </EmailTextField>
    );
}