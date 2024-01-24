import { Typography } from '@mui/material';
import styled from 'styled-components'
const MainLayout = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: pink;
  
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

const SectionTitle = styled(Typography)`
    text-align: center;
    background-color: pink;
    padding: 0 3rem;
    line-height: 2rem;
    z-index: 5;
`;

export {
    MainLayout,
    Line,
    SectionTitle
}