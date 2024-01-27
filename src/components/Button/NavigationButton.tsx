import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import styled from "styled-components";
import { FlatDropDown } from "../DropDown/FlatDropDown";
import { SignUpDropDown } from "../DropDown/SignUpDropDown";

  interface Props {
    text: string;
    Icon?: any;
    isBGColor?: boolean;
    Dropdown?: any;
    size?: string 
    options?: string []
  }
  const ButtonStyle = styled(Button)`
  position: unset;
    color: ${props => props.disableFocusRipple? "#000": "#fff"};
    &:hover{
      color:  ${props => props.disableFocusRipple? "#3170b7": "#fff"};
      background-color: ${props => props.disableFocusRipple? "transparent !important": "#404041"};
    }
  `
  // backgroundColor: isBGColor? "transparent": "#5b5a5a"
const NavigationButton: React.FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const { text, Icon, isBGColor, Dropdown, size, options} = props;
  const empty = () => {};
  const handleOpen = (event: Event | React.SyntheticEvent) => {
    setOpen(true);
  };
  const handleClose = (event: Event | React.SyntheticEvent) => {
    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false); 
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }
  return ( <>
      <ButtonStyle  disableFocusRipple={isBGColor} disableRipple={true} 
        onMouseOut={!!Icon ? empty : handleClose} onMouseOver={!!Icon ? empty : handleOpen} onClick={handleOpen}
        startIcon={Icon? <Icon />: undefined} endIcon={Dropdown? <Dropdown />: undefined}>
        <Typography sx={{ fontSize: size? size : "12px"}}>{ text }</Typography>
        {!Icon && options && <FlatDropDown  handleClose={handleClose} handleListKeyDown={handleListKeyDown} open={open} options={options}/> }
        {!!Icon && options && <SignUpDropDown  handleClose={handleClose} handleListKeyDown={handleListKeyDown} open={open} options={options}/> }
      </ButtonStyle>
  </>
  );
};

export default NavigationButton;