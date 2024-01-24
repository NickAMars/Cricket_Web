import { Box, Typography } from '@mui/material';
import styled from 'styled-components'
const MainLayout = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  
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
    background-color: #fff;
    padding: 0 3rem;
    margin: 40px 0;
    line-height: 2rem;
    z-index: 5;
`;
const Container = styled.section`
    padding: 0 20rem;
    display: flex;
    flex-direction:  column;
    @media only screen and (max-width: 65em) {
        padding: 0 15rem;
    }
    @media only screen and (max-width: 50em) {
        padding: 0 10rem;
    }
`;

const SmallContainer = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 5rem;
`;
export {
    MainLayout,
    Line,
    Title,
    Container,
    SmallContainer
}