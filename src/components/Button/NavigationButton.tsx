import React, { ReactNode } from "react";
import { Button } from "@mui/material";

  interface Props {
    text: string;
    Icon?: any;
    backgroundColor?: string;
  }

const ButtonComponent: React.FC<Props> = (props) => {
  const { text, Icon, backgroundColor} = props;
  return (
    <Button color="secondary" startIcon={Icon? <Icon />: undefined}>{ text }</Button>
  );
};

export default ButtonComponent;