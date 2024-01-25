
import { List, ListItem } from "@mui/material"
import NavigationButton from "@src/components/Button/NavigationButton";
import { Navigation } from "@src/interface/Navigation";
import styled from "styled-components";
interface Props {
    list: Navigation[];
    isBGColor: boolean
}


const ListStyle = styled(List)`
    display: flex;
    /* position: relative; */
    position: unset;
`;
const ListItemStyle = styled(ListItem)`
    display: flex;
    width: auto;
    position: unset;
    & > * {
        position: unset;
        height: 50px;
        /* width: 100%; */
        padding: 0 20px;
        border-radius: 0;
        &:hover {
            background-color: #5b5a5a;
        }
    }
`;
export const ListComponent: React.FC<Props> = (props) => {
    const { list, isBGColor} = props;
    return <ListStyle>
    {
        list.map(item => {
        return <ListItemStyle   key={item.text} disablePadding>
                        <NavigationButton {...item} isBGColor={isBGColor}/>
            </ListItemStyle>
               
        })
    }
</ListStyle>
}