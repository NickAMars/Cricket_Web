import { Typography } from "@mui/material";
import styled from "styled-components";



const FooterStyle = styled.section`
    display: flex;
    flex-direction: column;
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
    margin-bottom: 15px;
`;
const SignUpTitle = styled(Typography)`
    font-weight: 700;
`;
const SignUpDescr = styled(Typography)`
`;

const SecondFooterStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: #404041;
    color: #fff;
    justify-content:  center;
    & > * {
        margin: 0 40px;
    }
`;
const EndingFooterStyle = styled.div`
    background-color: #404041;
    color: #fff;
    padding: 5rem 10rem;
`;

const JoinContain = styled.div`
    display: flex;
    flex-direction: column;
`;
const JoinHeader = styled(Typography)`
    
`;
const JoinMedia = styled.div`
    display: flex;
    cursor: pointer;
    justify-content: space-between;
    & > * {
        width: 4rem;
        height: 4rem;
    }
`;

const FootContain = styled.div`
    display: flex;
    flex-direction: column;
    /* padding: 0 20px; */
`;
const FooterHeader = styled(Typography)`
`;
const FooterAncherContainer = styled.div`
    width: 18rem;
    display: flex;
    flex-direction: column;
`;
const FooterAncher = styled.a`
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;
const FooterAncherText = styled(Typography)`
`;
const CopyRightLicense = styled(Typography)`
    margin-top: 20px;   
    /* text-align: center; */
`;
export {
    FooterStyle,
    SignUpContainer,
    SignUpTitle,
    SignUpDescr,
    FirstFooterStyle,
    SecondFooterStyle,
    JoinContain,
    JoinHeader,
    JoinMedia,
    FootContain,
    FooterHeader,
    FooterAncherContainer,
    FooterAncher,
    FooterAncherText,
    CopyRightLicense,
    EndingFooterStyle
}