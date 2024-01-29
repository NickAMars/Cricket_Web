import { Box, TextField } from "@mui/material";
import styled from "styled-components";
import { theme } from "@src/theme";


const EmailTextField = styled(Box)`
    display: flex;
    align-items: flex-end;
    color: ${props=>props.theme.palette.common.white};
    margin-bottom: 15px;
`;
const InputField = styled(TextField)`
    height: 48px;
    width: 50rem;
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