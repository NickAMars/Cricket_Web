
import { Box, Button, List, ListItem, SwipeableDrawer, Typography } from "@mui/material"
import NavigationButton from "@src/components/Button/NavigationButton";
import { Navigation } from "@src/interface/Navigation";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { SearchBarComponent } from "../TextField/SearchBar";
import { AccordionComponent } from "./AccordionComponent";

interface Props {
    list: Navigation[];
    isBGColor: boolean;
    position?: string;
    revert?: boolean;
}


const ListStyle = styled(List)`
    display: flex;
    position: ${props => props["aria-details"] };
`;
const ListItemStyle = styled(ListItem)`
    display: flex;
    width: auto;
    position: ${props => {
        const pos =props["aria-details"];
        return pos;
    }};
    & > * {
        position: ${props => props["aria-details"] };
        height: 50px;
        @media only screen and (max-width: 63em) {
            padding: 0;
            width: 50px;
        }
        padding: 0 20px;
        border-radius: 0;
        &:hover {
            background-color: #5b5a5a;
            @media only screen and (max-width: 63em) {
                background-color: transparent;
                cursor: pointer;
            }
        }
    }
`;

    const VerticalLine = styled.div`
        border-left: 1px solid ${({theme: {palette: {grey} }})=> grey[400]};
        height: 60%;
        align-self: center;
    `;
    const SliderContainer = styled(Box)`
        width: 300px;
        padding-top: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
    `;
    const SignInCreateContainer = styled(Button)`
        border-top: none !important;
        border-width: 2px !important;
        padding: 20px 45px;
        border-radius: 0 !important;
        display: flex;
        flex-direction: column;
        justify-content:space-around;
        align-items: baseline;
        text-align: left;
        margin-bottom: 15px;
    `
export const ListComponent: React.FC<Props> = (props) => {
    const [open, openDrawer] = useState<boolean>(false);
    const toggleDrawer = useCallback(()=>{
        openDrawer(!open);
    },[open]);
    const { list, isBGColor, position, revert} = props;
    return <ListStyle aria-details={position}>
    {
        list.map(item => { 
        if (item.text === "Space") return  <VerticalLine key={item.text}  />;
        return <ListItemStyle  aria-details={position}  key={item.text} disablePadding>
                         { item.text !== "Menu" &&
                         <NavigationButton {...item} isBGColor={isBGColor} revert={revert}/>}
                         {item.text === "Menu" && <>
                            {!open && <item.Icon onClick={toggleDrawer}/>}
                            {open && <item.FlipIcon  onClick={toggleDrawer}/>}
                            <SwipeableDrawer
                                anchor="right"
                                open={open}
                                onClose={toggleDrawer}
                                onOpen={toggleDrawer}
                                >
                                <SliderContainer>
                                    <SignInCreateContainer variant="outlined" color="info">
                                        <Typography variant="subtitle2">Sign In or</Typography>
                                        <Typography variant="subtitle2">Create Account</Typography>
                                    </SignInCreateContainer>
                                    <SearchBarComponent />
                                    <AccordionComponent/>
                                </SliderContainer>
                            </SwipeableDrawer>
                         </>}
            </ListItemStyle>
               
        })
    }
</ListStyle>
}