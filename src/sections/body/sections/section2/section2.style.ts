import { Box, Typography } from "@mui/material";
import styled from "styled-components";

const SecondStyle = styled.section`
    display: flex;
    flex-direction:  column;
    padding: 0 10rem;
`;
const Plan = styled(Box)`
    display: flex;
    flex-direction:  row;
    justify-content: center;
    margin-bottom: 40px;
`;
const PlanIncluded = styled(Box)`
    display: flex;
    flex-direction:  column;
    align-items: center;
    min-height: 105px;
    margin: 20px 0;
    background-color: #fff;
    border-radius: 10px;
`;
const PlanIncludedHeader = styled(Typography)`
    font-weight: 900;
`;
const PlanContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 20px 0 10px 0;
    width: 100%;
`;

const HiddenDetail = styled(Typography)`
    margin-bottom: 15px;
`;
export {
    SecondStyle,
    Plan,
    PlanIncluded,
    PlanIncludedHeader,
    PlanContainer,
    HiddenDetail
}