
import { List, ListItem } from "@mui/material"
import ButtonComponent from "@src/components/Button/NavigationButton";
import { Navigation } from "@src/interface/Navigation";
import styled from "styled-components";
interface Props {
    list: Navigation[];
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
    const { list } = props;
    return <ListStyle>
    {
        list.map(item => {
        const {text, Icon}  = item;
        return <ListItemStyle   key={text} disablePadding>
                        <ButtonComponent text={text} Icon={Icon}/>
            </ListItemStyle>
               
        })
    }
</ListStyle>
}