import { Typography } from "@mui/material";
import styled from "styled-components";



const FooterStyle = styled.section`
    display: flex;
    /* background-color: #404041; */
`;
const FirstFooterStyle = styled.form`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    background-color: #f5f8fc;
    padding: 30px 0;
`;

const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
`;
const SignUpTitle = styled(Typography)`
    font-weight: 700;
`;
const SignUpDescr = styled(Typography)`
`;
export {
    FooterStyle,
    SignUpContainer,
    SignUpTitle,
    SignUpDescr,
    FirstFooterStyle
}