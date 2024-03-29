import styled from "styled-components";


const SubHeaderStyle = styled.nav`
    position: relative;
    height: 80px;
    background-color:${props=>props.theme.palette.common.white};
    display: flex;
    justify-content: space-around;
    margin: 0 60px;
    @media only screen and (max-width: 63em) {
        justify-content: space-between;
        margin: 0;
        z-index: 10000;
    }
`;
const CricketLogo = styled.img`
    height: 80px;
`

export {
    SubHeaderStyle,
    CricketLogo
}