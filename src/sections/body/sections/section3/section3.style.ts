import { Typography } from "@mui/material";
import styled from "styled-components";

const ThirdStyle = styled.section`
    display: flex;
    flex-direction:  column;
`;

const ArticleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 60em) {
        display: block;
        & > * {
            margin-bottom: 20px !important;
            width: 100% !important;
        }
    }
`;
export {
    ThirdStyle,
    ArticleContainer
}