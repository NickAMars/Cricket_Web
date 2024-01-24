import React from "react";
import { Button } from "@mui/material";
import styled from "styled-components";

  interface Props {
    text: string;
    Icon?: any;
    isBGColor?: boolean;
  }
  const ButtonStyle = styled(Button)`
    color: ${props => props.disableFocusRipple? "#000": "#fff"};
    &:hover{
      color:  ${props => props.disableFocusRipple? "#3170b7": "#fff"};
      background-color: ${props => props.disableFocusRipple? "transparent !important": "#404041"};
    }
  `
  // backgroundColor: isBGColor? "transparent": "#5b5a5a"
const NavigationButton: React.FC<Props> = (props) => {
  const { text, Icon, isBGColor} = props;
  return ( 
    <ButtonStyle  disableFocusRipple={isBGColor}
     startIcon={Icon? <Icon />: undefined}>{ text }</ButtonStyle>
  );
};

export default NavigationButton;