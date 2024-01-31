
import MenuItem from '@mui/material/MenuItem';
import Popper from '@mui/material/Popper';
import { ClickAwayListener, Grow, MenuList, Paper, Typography } from '@mui/material';
import styled from 'styled-components';
interface Props {
    options: string [] | undefined;
    open: boolean;
    handleClose: (event: any) => void;
  }

  const PopperContainer = styled(Popper)`
    position: absolute !important;
    top: 80px !important;
    left: -60px !important;
    width: 100vw;
`
const MenuListStyle = styled(MenuList)`
    display: flex;
    justify-content: center;
`
const MenuStyle = styled(Paper)`
        border-top: 1px solid  ${({theme: {palette: {common}}})=> common.black};;
        border-radius: 0;
`
const MenuItemStyle = styled(MenuItem)`
&:hover {
    background-color: transparent;
    color: ${({theme: {palette: {secondary}}})=> secondary.main};
}
`
export const FlatDropDown: React.FC<Props> = (props) => {

    const {open, handleClose, options} = props;
  
    return <PopperContainer           
                open={open}
                role={undefined}
                placement="bottom-start"
                transition
                
                disablePortal>
                {({ TransitionProps }) => (
                    <Grow
                    {...TransitionProps}
                    
                    >
                    <MenuStyle >
                        <ClickAwayListener onClickAway={handleClose}>
                            <MenuListStyle
                                id="composition-menu"
                                aria-labelledby="composition-button"
                            >
                                    {options?.map(option => <MenuItemStyle key={option} disableRipple={true} onClick={handleClose}>
                                        <Typography sx={{ fontSize:"17px"}}>
                                            {option}
                                        </Typography>
                                        </MenuItemStyle> )}
                            </MenuListStyle>
                        </ClickAwayListener>
                    </MenuStyle>
                    </Grow>
                )}

        </PopperContainer>
}