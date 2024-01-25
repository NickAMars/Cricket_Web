
import MenuItem from '@mui/material/MenuItem';
import Popper from '@mui/material/Popper';
import { ClickAwayListener, Grow, MenuList, Paper, Typography } from '@mui/material';
// import styled from 'styled-components';

interface Props {
    options: string [] | undefined;
    open: boolean;
    handleClose: (event: any) => void;
    handleListKeyDown: (event: any) => void;
  }
export const DropDown: React.FC<Props> = (props) => {

    const {open, handleClose, handleListKeyDown, options} = props;
  
    return <Popper           
                open={open}
                role={undefined}
                placement="bottom-start"
                transition
                
                disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                    {...TransitionProps}
                    
                    >
                    <Paper >
                        <ClickAwayListener onClickAway={handleClose}>
                            <MenuItem
                                id="composition-menu"
                                aria-labelledby="composition-button"
                                onKeyDown={handleListKeyDown}
                            >
                                    {options?.map(option => 
                                    <MenuList key={option} onClick={handleClose}>
                                        <Typography sx={{ fontSize:"17px"}}>
                                            {option}
                                        </Typography>
                                    </MenuList> )}
                            </MenuItem>
                        </ClickAwayListener>
                    </Paper>
                    </Grow>
                )}

        </Popper>
}