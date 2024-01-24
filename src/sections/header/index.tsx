import { Fragment } from "react";
import { HeaderComponent } from "./header.style"
import { ListComponent } from "@src/components/Lists/ListComponent";
import { NAV_ITEMS } from "@src/utility/constants";
import { SearchBarComponent } from "@src/components/SearchBar";
import { SubHeaderComponent } from "../subheader";


export const Header: React.FC<{}> = (props) => {
    return <>
            <HeaderComponent>    
                <Fragment>
                    <ListComponent list={NAV_ITEMS} isBGColor={false}/>
                    <SearchBarComponent />
                </Fragment>
            </HeaderComponent>
          <SubHeaderComponent />
    </>
}