import React from "react";
import { Button } from "@mui/material";
import styled from "styled-components";

  interface Props {
    text: string;
    width: string;
    content?: string;
  }
  const ButtonStyle = styled(Button)`
    color: ${props => !props.content? props.theme.palette.secondary.main: props.theme.palette.info.main};
    background-color: ${props => !props.content?  props.theme.palette.info.main : props.theme.palette.secondary.main};
    border: 1px solid ${props => props.theme.palette.info.light};
    padding: 1rem 2rem;
    margin-bottom: 10px;
    &:hover{
      background-color: ${props => !props.content?  props.theme.palette.info.dark : props.theme.palette.secondary.light};
      border: 1px solid ${props => props.theme.palette.info.dark};
    }
  `
const SimpleButton: React.FC<Props> = (props) => {
  const { text , width, content} = props;

  return ( 
    <ButtonStyle sx={{ width: width? width: '100%' }} content={content}>{ text }</ButtonStyle>
  );
};

export default SimpleButton;