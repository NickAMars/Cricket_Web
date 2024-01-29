import { Box, Typography } from '@mui/material';
import styled from 'styled-components'
const MainLayout = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color:${props=>props.theme.palette.common.white};
  
`

const Line = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    position: relative;
    margin-bottom: 40px;
    &:after{
        content: "";
        background: #60A630;
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: 0;
        left: 0;
        top:0;
        right:0;
        margin: auto;
    }
`;

const Title = styled(Typography)`
    text-align: center;
    background-color:${props=>props.theme.palette.common.white};
    padding: 0 3rem;
    margin: 40px 0;
    line-height: 2rem;
    z-index: 5;
`;
const Container = styled.section`
    padding: 0 20rem;
    display: flex;
    flex-direction:  column;
    align-items: center;
    @media only screen and (max-width: 65em) {
        padding: 0 15rem;
    }
    @media only screen and (max-width: 50em) {
        padding: 0 10rem;
        display: black;
    }

    & >  *{
        width: 100%;
    }
`;

const SmallContainer = styled(Box)`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 5rem;
`;

const ArticleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 55em) {
        display: block;
        & > * {
            width: 100% !important;
        }
    }
`;


export {
    MainLayout,
    Line,
    Title,
    Container,
    SmallContainer,
    ArticleContainer
}