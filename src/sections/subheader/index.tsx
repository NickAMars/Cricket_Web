import { Fragment } from "react";
import { SubHeaderStyle, CricketLogo } from "./subheader.style";
import Cricket from '@assets/cricket.png'
import { ListComponent } from "@src/components/Lists/ListComponent";
import { SMALL_SIZE_NAV, SUB_NAB_ITEMS } from "@src/utility/navigation";

import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';

export const SubHeaderComponent: React.FC<{width?: number}> = (props) => {
    const {width}= props;
    let Navigation;
    if(width && width > 900){
        Navigation =   <Fragment>
            <ListComponent position={"unset"} list={SUB_NAB_ITEMS} isBGColor={true}/>
        </Fragment>
    } else {
        Navigation = <>
            <ListComponent position={"relative"} list={SMALL_SIZE_NAV} isBGColor={true} revert={true}/>
            {/* <MenuIcon /> */}
        </>;
    }
    return <SubHeaderStyle>
        <CricketLogo src={Cricket} alt="work"/>
        {Navigation}
    </SubHeaderStyle>;
}