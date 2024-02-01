import { Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { IconButtonComponent } from "../Button/IconButton";
import styled from "styled-components";
import { theme } from "@src/theme";


const SearchBar = styled(Box)`
    display: flex;
    align-items: flex-end;
    color: ${props=>props.theme.palette.common.white};
    width: 27rem;
    margin-top: 10px;
    border-radius: 0;
    & > div{
        background-color: #fff;
        width:100%;
        border-radius: 0;
        padding:0;
        &:hover{
            border-radius: 0;
        }
    }
`;
const SearchInput = styled(InputAdornment)`
    display: flex;
    justify-content: space-between;
`
const SearchIcon = styled(IconButton)`
    &:hover{
        border-radius: 50px;
    }
`
export const SearchBarComponent: React.FC<{}> = (props) => {

    return (
        <SearchBar >
                    <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                        <InputLabel htmlFor="search_id">Search...</InputLabel>
                            <OutlinedInput
                            id="search_id"
                            type='text'
                            color="info"
                            endAdornment={
                            <SearchInput position="end">
                                
                                    <IconButtonComponent />
                               
                            </SearchInput>
                            }
                            label="Password"
                            />
                    </FormControl>
        </SearchBar>
    );
}