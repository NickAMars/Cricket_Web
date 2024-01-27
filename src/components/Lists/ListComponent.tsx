
import { List, ListItem } from "@mui/material"
import NavigationButton from "@src/components/Button/NavigationButton";
import { Navigation } from "@src/interface/Navigation";
import styled from "styled-components";
interface Props {
    list: Navigation[];
    isBGColor: boolean;
    position?: string;
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
        padding: 0 20px;
        border-radius: 0;
        &:hover {
            background-color: #5b5a5a;
        }
    }
`;
export const ListComponent: React.FC<Props> = (props) => {
    const { list, isBGColor, position} = props;
    return <ListStyle aria-details={position}>
    {
        list.map(item => {
        return <ListItemStyle  aria-details={position}  key={item.text} disablePadding>
                        <NavigationButton {...item} isBGColor={isBGColor}/>
            </ListItemStyle>
               
        })
    }
</ListStyle>
}