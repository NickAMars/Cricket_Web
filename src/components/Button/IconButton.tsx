import { IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import styled from "styled-components";
// interface Props {
//     Icon?: any;
//     backgroundColor?: string;
//   }

const Icon = styled(IconButton)`
    display: flex;
    border-radius: 0;
    height: 100%;
    background-color: ${props=>props.theme.palette.primary.light};
    &:hover {
        background-color: ${props=>props.theme.palette.primary.dark};
        border-radius: 0;
    }
`;
export const IconButtonComponent: React.FC<{}> = (props) => {
    return (
        <Icon color="secondary">
            <SearchIcon  fontSize={"large"}/>
        </Icon>
    );
  };