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
    size?: string;
    revert?: boolean;
    options?: string [];

  }
  const ButtonStyle = styled(Button)`
  position: unset;
    color: ${({disableFocusRipple, theme: {palette: {common}}}) => 
        disableFocusRipple? common.black: common.white};
    &:hover{
      color:  ${({disableFocusRipple, theme: {palette: {secondary, common}}}) =>
        disableFocusRipple? secondary.main : common.white};
      background-color: ${({disableFocusRipple, theme: {palette: {common: {black}}}}) =>
        disableFocusRipple? "transparent !important": black};
    }
  `

const NavigationButton: React.FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const { text, Icon, isBGColor, Dropdown, size, options, revert} = props;
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
      <ButtonStyle aria-checked={ revert } disableFocusRipple={isBGColor} disableRipple={true} 
        onMouseOut={!!Icon ? empty : handleClose} onMouseOver={!!Icon ? empty : handleOpen} onClick={handleOpen}
        startIcon={Icon? <Icon />: undefined} endIcon={Dropdown? <Dropdown />: undefined}>
        <Typography sx={{ fontSize: size? size : "12px"}}>{ text }</Typography>
        {!Icon && options && <FlatDropDown  handleClose={handleClose} handleListKeyDown={handleListKeyDown} open={open} options={options}/> }
        {!!Icon && options && <SignUpDropDown  handleClose={handleClose} handleListKeyDown={handleListKeyDown} open={open} options={options} revert={revert}/> }
      </ButtonStyle>
  </>
  );
};

export default NavigationButton;