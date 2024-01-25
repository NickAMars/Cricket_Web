import React from "react";
import { Button } from "@mui/material";
import styled from "styled-components";

  interface Props {
    text: string;
    width: string;
  }
  const ButtonStyle = styled(Button)`
    color: #fff;
    background-color: #3170B7;
    padding: 1rem 2rem;
    &:hover{
      background-color: #003E7F;
    }
  `
const SimpleButton: React.FC<Props> = (props) => {
  const { text , width} = props;

  return ( 
    <ButtonStyle sx={{ width: width? width: '100%' }}>{ text }</ButtonStyle>
  );
};

export default SimpleButton;