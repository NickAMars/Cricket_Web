import styled from "styled-components";

const FirstTopicStyle = styled.div`
    display: flex;
    min-height: 40px;
    background-color:  ${(props)=> props.theme.palette.primary.main};
    justify-content: center;
    padding: 10rem 15rem;
`;

export {
    FirstTopicStyle
}