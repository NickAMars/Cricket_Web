
import { useCallback, useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, List, ListItem, Typography }  from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { NAV_ITEMS, SUB_NAB_ITEMS } from "@src/utility/navigation";
import styled from "styled-components";

const AccordionContainer = styled(Accordion)`
  box-shadow: none;
  width: 100%;
  padding: 0 20px;
  /* &::before {
    content: none;
  } */
  & > div {
    padding: 0;
  }
`;

const ListStyle = styled(List)`
    display: flex;
    flex-direction: column;
`;
const ListItemStyle = styled(ListItem)`
  text-decoration: underline;
  cursor: pointer;
`;
const SubNavText = styled(Typography)`
  color: ${ ({theme: {palette: {common}}}) => common.dark} !important;
`
const NavText = styled(Typography)`
  color: ${ ({theme: {palette: {common}}}) => common.white};
  text-decoration: underline;
`
const NavAcc = styled(AccordionContainer)`
  background-color: ${ ({theme: {palette: {common}}}) => common.black};
`
const ExpandIcon = styled(ExpandMoreIcon)`
  color: ${ ({theme: {palette: {common}}}) => common.white} !important;
  background-color: ${ ({theme: {palette: {secondary}}}) => secondary.main} !important;
  border-radius: 50%;
  width: 20px;
  height: 20px;
`
export const AccordionComponent: React.FC<{}> = (props) => {
    const [expanded, setExpanded] = useState<string>("");
    const toggleAccordions = useCallback((panel: string)=>{
      if(panel !== "Free Trial"){
        setExpanded((expanel: string)=> expanel !== panel ? panel : "");
      }
    },[expanded]);
    return <div style={{ marginTop: 15, width: "100%"}}>
    {SUB_NAB_ITEMS.map(nav=><AccordionContainer
        expanded={nav.text === expanded}
        onChange={toggleAccordions.bind(null,nav.text)}
      >
        <AccordionSummary
          expandIcon={nav.options ? <ExpandIcon /> : <></>}
        >
          <SubNavText  variant="subtitle2" color="info">
            {nav.text}
          </SubNavText>
        </AccordionSummary>
        { nav.options && <AccordionDetails>
          <ListStyle>
            { nav.options?.map(
              option =>(
                <ListItemStyle>
                    <Typography variant="subtitle2" fontWeight={100}>
                      {option}
                    </Typography>
                </ListItemStyle>
                      
              )
            )}
           </ListStyle>
        </AccordionDetails> }
      </AccordionContainer>)}
      {NAV_ITEMS.map(nav=><NavAcc>
        <AccordionSummary
          expandIcon={<></>}
        >
          <NavText  variant="subtitle2" color="info">
            {nav.text}
          </NavText>
        </AccordionSummary>
      </NavAcc>)}
    </div>;
}