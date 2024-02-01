import { IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import styled from "styled-components";
// interface Props {
//     Icon?: any;
//     backgroundColor?: string;
//   }

const Icon = styled(IconButton)`
    display: flex;
    color:  ${({theme: {palette: {common}}})=> common.black};
    border-radius: 0;
    height: 100%;
    background-color: ${props=>props.theme.palette.common.white};
    &:hover {
        background-color: ${props=>props.theme.palette.grey[400]};
        border-radius: 0;
    }
`;
export const IconButtonComponent: React.FC<{}> = (props) => {
    return (
        <Icon>
            <SearchIcon  fontSize={"large"}/>
        </Icon>
    );
  };