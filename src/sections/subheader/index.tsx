import { Fragment} from "react";
import { SubHeaderStyle, CricketLogo } from "./subheader.style";
import Cricket from '@assets/cricket.png'
import { ListComponent } from "@src/components/Lists/ListComponent";
import { SMALL_SIZE_NAV, SUB_NAB_ITEMS } from "@src/utility/navigation";
import React from "react";

export const SubHeaderComponent: React.FC<{width?: number}> = (props) => {
    const {width}= props;
    let Navigation;

    if(width && width > 1000){
        Navigation =   <Fragment>
            <ListComponent position={"unset"} list={SUB_NAB_ITEMS} isBGColor={true}/>
        </Fragment>
    } else {
        Navigation = <>
            <ListComponent position={"relative"} list={SMALL_SIZE_NAV} isBGColor={true} revert={true}/>
        </>;
    }
    return <SubHeaderStyle>
        <CricketLogo src={Cricket} alt="work"/>
        {Navigation}
    </SubHeaderStyle>;
}