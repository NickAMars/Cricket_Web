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
    &:hover {
        background-color: #5b5a5a;
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