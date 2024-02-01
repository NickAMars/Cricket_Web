import React, { useCallback, useState } from "react";
import { Button, Typography } from "@mui/material";
import styled from "styled-components";
import { FlatDropDown } from "../DropDown/FlatDropDown";
import { SignUpDropDown } from "../DropDown/SignUpDropDown";
import { HelpDropDown } from "../DropDown/HelpDropDown";

  interface Props {
    text: string;
    Icon?: any;
    isBGColor?: boolean;
    Dropdown?: any;
    size?: string;
    revert?: boolean;
    options?: string [];
    menu?:boolean;

  }
  const ButtonStyle = styled(Button)`
  display: flex;
  flex-direction: ${props => props["aria-checked"] ? "column": "row"};
  justify-content: center;
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
  const { text, Icon, isBGColor, Dropdown, size, options, revert, menu} = props;
  const empty = useCallback(() => {},[]);
  const handleOpen = useCallback(() => {
    if(!open){
      setOpen(true);
    }
  }, [open]);
  const handleClose = useCallback(() => {
    setOpen(false);
  }, [open]);
  return ( <>
      <ButtonStyle aria-checked={ revert } disableFocusRipple={isBGColor} disableRipple={true} 
        onMouseOut={menu ? empty : handleClose} onMouseOver={menu ? empty : handleOpen} onClick={handleOpen}
        startIcon={Icon? <Icon />: undefined} endIcon={Dropdown? <Dropdown />: undefined}>
        <Typography sx={{ fontSize: size? size : "12px"}}>{ text }</Typography>
        {!menu && options && <FlatDropDown  handleClose={handleClose} open={open} options={options}/> }
        {text === "Sign In" && options && <SignUpDropDown  handleClose={handleClose} open={open} options={options} revert={revert}/> }
        { text === "Help" && <HelpDropDown handleClose={handleClose} open={open} />}
      </ButtonStyle>
  </>
  );
};

export default NavigationButton;