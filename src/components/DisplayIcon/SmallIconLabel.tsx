import React from "react";
import { IconButton, Typography } from "@mui/material";
import styled from "styled-components";

  interface Props {
    text: string;
    Icon?: any;
  }
  const ButtonStyle = styled(IconButton)`
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.theme.palette.primary.main};
    margin-right: 10px;
    cursor: auto;
    & > svg {
      color:  ${({theme: {palette: {common}}})=> common.white};
      height: 18px;
      width: 18px;
    }
  `
  const Description = styled(Typography)`
    color:  ${({theme: {palette: {common}}})=> common.black};
  `
  const IconLabelContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 0 20px;
    @media only screen and (max-width: 60em) {
        margin: 10px 0;
    }
  `
export const SmallIconLabel: React.FC<Props> = (props) => {
  const { text, Icon} = props;
  return (<IconLabelContainer>
              <ButtonStyle disableFocusRipple={true} disableRipple={true} color="primary">
                <Icon  fontSize={"large"}/>
              </ButtonStyle>
              <Description variant="body1">{text}</Description>
          </IconLabelContainer> 
  );
};