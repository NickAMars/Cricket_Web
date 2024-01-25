import { Box, TextField } from "@mui/material";
import { IconButtonComponent } from "../Button/IconButton";
import styled from "styled-components";
import { theme } from "@src/theme";


const SearchBar = styled(Box)`
    display: flex;
    align-items: flex-end;
    color: #fff;
    & > div > div {
        border-radius: 0;
    }
`;
export const SearchBarComponent: React.FC<{}> = (props) => {

    return (
        <SearchBar >
            <TextField variant="outlined" color="secondary"  placeholder="Search..."
              sx={{ input: { backgroundColor: 'white', fontSize:  theme.typography.body1.fontSize } }}/>
            <IconButtonComponent />
        </SearchBar>
    );
}