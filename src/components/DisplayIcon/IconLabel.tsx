import React from "react";
import { IconButton, Typography } from "@mui/material";
import styled from "styled-components";

  interface Props {
    text: string;
    Icon?: any;
  }
  const ButtonStyle = styled(IconButton)`
    height: 40px;
    border-radius: 10px;
    background-color: ${props => props.theme.palette.primary.main};
    margin-right: 20px;
    cursor: auto;
    & > svg {
      color: #fff;
      height: 35px;
      width: 35px;
    }
  `
  const Description = styled(Typography)`
    color: #000;
    font-weight: 900;
  `
  const IconLabelContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: 5rem 0;
  `
export const IconLabel: React.FC<Props> = (props) => {
  const { text, Icon} = props;
  return (<IconLabelContainer>
              <ButtonStyle disableFocusRipple={true} disableRipple={true} color="primary">
                <Icon  fontSize={"large"}/>
              </ButtonStyle>
              <Description variant="body1">{text}</Description>
          </IconLabelContainer> 
  );
};