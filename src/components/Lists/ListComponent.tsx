
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
`;
const ListItemStyle = styled(ListItem)`
    display: flex;
    width: 110px;
    & > * {
        height: 50px;
        width: 100%;
        padding: 0 10px;
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
        const {text, Icon}  = item;
        return <ListItemStyle   key={text} disablePadding>
                        <NavigationButton isBGColor={isBGColor} text={text} Icon={Icon}/>
            </ListItemStyle>
               
        })
    }
</ListStyle>
}