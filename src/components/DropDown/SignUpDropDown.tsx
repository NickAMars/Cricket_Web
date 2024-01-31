
import MenuItem from '@mui/material/MenuItem';
import Popper from '@mui/material/Popper';
import { ClickAwayListener, Grow, MenuList, Paper, Typography } from '@mui/material';
import styled from 'styled-components';
import SimpleButton from '../Button/SimpleButton';

interface Props {
    options: string [] | undefined;
    open: boolean;
    revert?: boolean;
    handleClose: (event: any) => void;
  }
  const PopperContainer = styled(Popper)`
        position: absolute !important;
        z-index: 2;
        top: 65px !important;
        left: ${props => props['aria-checked']? "-37rem": "-33rem"} !important;
        cursor: auto;
   `
   const MenuListStyle = styled(MenuList)`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 450px;
    `

    const MenuItemStyle = styled(MenuItem)`
        width: 100%;
        color: ${({theme: {palette: {secondary}}})=> secondary.main};
        padding: 16px 20px;
        &:hover {
            background-color: transparent;
            color: ${({theme: {palette: {secondary}}})=> secondary.dark};
            text-decoration:underline;
        }
    `
    const HeaderStyle = styled(Typography)`
        padding: 24px 0;
        margin: 0 24px;
        font-weight: 700;
    `
    const LineSeperator = styled.hr`
        height: 0.1px;
        width: 400px;
        flex-shrink: 1;
        font-weight: 600;
        color: #DDD;
        align-self: center;
    `
    const ActionContainer = styled.div`
        display: flex;
        width: 100%;
        height: 90px;;
        justify-content: space-between;
        padding: 16px 20px;
    `
export const SignUpDropDown: React.FC<Props> = (props) => {

    const {open, handleClose, options, revert} = props;
  
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
                    <Paper >
                        <ClickAwayListener onClickAway={handleClose}>
                            <MenuListStyle
                                id="composition-menu"
                                aria-labelledby="composition-button"
                            >
                                    <HeaderStyle variant='subtitle2'>
                                        Online Account
                                    </HeaderStyle>
                                    {options?.map(option => 
                                    <MenuItemStyle key={option} onClick={handleClose}>
                                        <Typography sx={{ fontSize:"14px"}}>
                                            {option}
                                        </Typography>
                                    </MenuItemStyle> )}
                                    <LineSeperator />
                                    {["Track My order", "Activate My Device"].map(option => 
                                    <MenuItemStyle key={option} onClick={handleClose}>
                                        <Typography sx={{ fontSize:"14px"}}>
                                            {option}
                                        </Typography>
                                    </MenuItemStyle> )}
                                    <LineSeperator />
                                    <ActionContainer>
                                        <SimpleButton text={'Create Account'} width={"17rem"} content={"light"}/>
                                        <SimpleButton text={'Sign Up'} width={"17rem"}/>
                                    </ActionContainer>
                            </MenuListStyle>
                        </ClickAwayListener>
                    </Paper>
                    </Grow>
                )}

        </PopperContainer>
}