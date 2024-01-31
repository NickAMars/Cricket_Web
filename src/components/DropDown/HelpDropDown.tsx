
import MenuItem from '@mui/material/MenuItem';
import Popper from '@mui/material/Popper';
import { ClickAwayListener, Grow, MenuList, Paper, Typography } from '@mui/material';
import styled from 'styled-components';
import SimpleButton from '../Button/SimpleButton';
import CloseIcon from '@mui/icons-material/Close';
import UnifiedChat from "@assets/unified_chat-chat.webp";
import UnifiedSupport from "@assets/unified_chat-support.webp";
import IconStore from "@assets/icon-store-blue-40x40.png";
import { ActionLink, Availability, CardContainer, CardDescription, CardDetail, CardImage, CardTitle, HeaderContainer, HeaderIcon, StoreContainer, StoreIcon } from './dropdown.style';

interface Props {
    open: boolean;
    revert?: boolean;
    handleClose: (event: any) => void;
  }
  const PopperContainer = styled(Popper)`
        position: fixed !important;
        z-index: 10;
        left: auto !important;
        right:0;
        cursor: auto;
   `
    const PaperContainer = styled(Paper)`
        height: 100vh;
        max-width: 400px;
        padding: 10px 15px;
        overflow-y: scroll;
    `
   const MenuListStyle = styled(MenuList)`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        text-align: left;
    `

export const HelpDropDown: React.FC<Props> = (props) => {

    const {open, handleClose, revert} = props;
  
    return <PopperContainer           
                open={open}
                role={undefined}
                transition
                aria-checked={revert}
                disablePortal>
                {({ TransitionProps }) => (
                    <Grow
                    {...TransitionProps}
                    >
                    <PaperContainer >
                        <ClickAwayListener onClickAway={handleClose}>
                            <MenuListStyle
                                id="composition-menu"
                                aria-labelledby="composition-button"
                            >
                                <HeaderContainer>
                                    <Typography variant='subtitle1'>Help</Typography>
                                    <HeaderIcon fontSize={"large"} />
                                </HeaderContainer>
                                <Typography variant='subtitle2' fontWeight={100}>
                                    We go the extra smile to help our customers. Connect with an expert via text chat and more.
                                </Typography>
                                <CardContainer>
                                    
                                    <CardImage src={UnifiedChat} alt="chat" />
                                    
                                    <CardDetail>
                                        <CardTitle fontWeight={600} fontSize={15}>Need Help Managing Your Account?</CardTitle>
                                        <CardDescription>
                                            <Availability>
                                                <Typography>Mon-Sat: 9am - 11pm EST</Typography>
                                                <Typography>Sun: 10am - 11pm EST</Typography>
                                            </Availability>
                                            <Typography fontSize={16}>Our digital assistant is available 24/7.</Typography>
                                        </CardDescription>
                                        <ActionLink>
                                            Chat with Us
                                        </ActionLink>
                                    </CardDetail>
                                </CardContainer>
                                <CardContainer>
                                    <CardImage src={UnifiedSupport} alt="support" />
                                    <CardDetail>
                                        <CardTitle fontWeight={600} fontSize={15}>Have FAQs?</CardTitle>
                                        <CardDescription>
                                            <Typography fontSize={16}>Visit our support page to find the most up-to-date solutions so you can do it yourself.</Typography>
                                        </CardDescription>
                                        <ActionLink>
                                            Find Answers
                                        </ActionLink>
                                    </CardDetail>
                                </CardContainer>
                                <StoreContainer>
                                    <StoreIcon src={IconStore} alt="" />
                                    <Typography fontSize={16}> Get in Store Help </Typography>
                                    <ActionLink> Find a Store </ActionLink>
                                </StoreContainer>
                            </MenuListStyle>
                        </ClickAwayListener>
                    </PaperContainer>
                    </Grow>
                )}

        </PopperContainer>
}