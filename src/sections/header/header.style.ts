import styled from "styled-components";


const HeaderComponent = styled.nav`
    height: 50px;
    background-color: ${({theme: {palette: {common}}})=> common.black};
    display: flex;
    justify-content: center;
`;

export {
  HeaderComponent
}