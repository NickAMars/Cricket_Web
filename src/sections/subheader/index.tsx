import { Fragment } from "react";
import { SubHeaderStyle, CricketLogo } from "./subheader.style";
import Cricket from '@assets/cricket.png'
import { ListComponent } from "@src/components/Lists/ListComponent";
import { SUB_NAB_ITEMS } from "@src/utility/constants";

export const SubHeaderComponent: React.FC<{}> = (props) => {
    return <SubHeaderStyle>
        <CricketLogo src={Cricket} alt="work"/>
        <Fragment>
            <ListComponent list={SUB_NAB_ITEMS} isBGColor={true}/>
        </Fragment>
    </SubHeaderStyle>;
}