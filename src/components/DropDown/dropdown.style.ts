import styled from "styled-components"
import CloseIcon from '@mui/icons-material/Close';
import { Box, Typography } from "@mui/material";

const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
`

const HeaderIcon = styled(CloseIcon)`
     fill: ${ ({theme: {palette: {secondary}}})=> secondary.main};
     font-size: 18px;
     font-weight: bold;
     cursor: pointer;
     &:hover {
        transform: scale(1.2);
     }
`
const CardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid ${ ({theme: {palette}})=> palette.grey[100]};
    border-radius:  10px;
    padding: 20px 0;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .2);
    margin: 10px 0;
`
const CardTitle = styled(Typography)`
    padding-top: 40px;
    margin-bottom: 16px;
`
const CardDescription = styled(Box)`
    display: flex;
    flex-direction: column;
    & > * {
        margin-bottom: 10px;
    }
`
const CardImage = styled.img`
    object-fit: fill;
    padding: 0 10px;
`
const Availability = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    & > * {
        font-size: 16px;
        font-weight: 400;
    }
`
const CardDetail = styled.div`
    font-size: 16px;
`
const ActionLink = styled.a`
    cursor: pointer;
    font-size: 16px;
    text-decoration: underline;
    color: ${ ({theme: {palette: {secondary}}})=> secondary.main};
`

const StoreContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid ${ ({theme: {palette}})=> palette.grey[100]};
    width: 100%;
    padding: 20px 0;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .2);
    padding-top: 2rem;
    margin-bottom: 2rem;
    height: 200px;
    border-radius:  10px;
`
const StoreIcon = styled.img`
    width: 40px;
    height: 40px;
`
export {
    HeaderContainer,
    HeaderIcon,
    CardContainer,
    CardTitle,
    CardDescription,
    CardImage,
    Availability,
    CardDetail,
    ActionLink,
    StoreContainer,
    StoreIcon
}