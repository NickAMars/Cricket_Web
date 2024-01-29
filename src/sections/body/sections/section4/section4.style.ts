import { Typography } from "@mui/material";
import styled from "styled-components";

const FourthStyle = styled.section`
    display: flex;
    flex-direction:  column;
`;

const PhoneDeals = styled.article`
    display: grid;
    grid-gap: 1.25rem;
    gap: 1.25rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
    max-width: 1190px;
    margin: 0 auto;
    @media only screen and (max-width: 60em) {
        grid-template-columns: 1fr;
        margin: 0 !important;
        padding: 0 15rem;
        & > * {
            width: 100% !important;
        }
    }
`;

export {
    FourthStyle,
    PhoneDeals
}