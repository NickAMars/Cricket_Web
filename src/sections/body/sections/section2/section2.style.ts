import { Box, Button, Typography } from "@mui/material";
import styled from "styled-components";

const SecondStyle = styled.section`
    display: flex;
    flex-direction:  column;
`;

const Plan = styled(Box)`
    display: flex;
    flex-direction:  row;
    justify-content: space-evenly;
    margin-bottom: 40px;
    @media only screen and (max-width: 60em) {
        display: block;
        & > * {
            margin-bottom: 20px !important;
            width: 100% !important;
        }
    }
`;
const PlanIncluded = styled(Box)`
    display: flex;
    flex-direction:  column;
    align-items: center;
    min-height: 105px;
    margin: 20px 0;
    background-color: ${props=>props.theme.palette.common.white};
    border-radius: 10px;
    box-shadow: 0 8px 16px rgba(0,0,0,.25);
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
    @media only screen and (max-width: 60em) {
        display: block;
        width: auto;
        text-align: center;
    }
`;

const HiddenDetail = styled(Typography)`
    margin-bottom: 15px;
`;

const GlobalNetwork = styled.div`
    display: flex;
    flex-wrap: wrap;
    & > * {
        flex: 1;
    }
`;
const WorldMap = styled.div`
    height: 100%;
`;

const Coverage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding: 0 10rem;  */
    width: 20rem;
    padding-left: 20px;
`;
const CoverageHeader = styled(Typography)`
    font-weight: 900;
    margin-bottom: 10px;
`;
const CoverageSubTopic = styled(Typography)`
    margin: 2.5rem 0;
    /* padding: 0 10rem; */
`;
const CoverageHidden = styled(Typography)`
    margin-bottom: 20px;
    align-self: flex-start;
`;
const CoverageAction = styled.div`
    display: flex;
    width: 100%;
`;
const StoreButton = styled(Button)`
    padding: 1rem 2rem;
    width: 25rem;
    margin-right: 30px;
`;
const MapButton = styled(Button)`
    padding: 1rem 2rem;
    width: 25rem;
`;
export {
    SecondStyle,
    Plan,
    PlanIncluded,
    PlanIncludedHeader,
    PlanContainer,
    HiddenDetail,
    GlobalNetwork,
    WorldMap,
    Coverage,
    CoverageHeader,
    CoverageSubTopic,
    CoverageHidden,
    CoverageAction,
    StoreButton,
    MapButton
}