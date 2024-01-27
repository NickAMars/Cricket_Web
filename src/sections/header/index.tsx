import { Fragment } from "react";
import { HeaderComponent } from "./header.style"
import { ListComponent } from "@src/components/Lists/ListComponent";
import { NAV_ITEMS } from "@src/utility/navigation";
import { SearchBarComponent } from "@src/components/TextField/SearchBar";
import { SubHeaderComponent } from "../subheader";


export const Header: React.FC<{}> = (props) => {
    return <>
            <HeaderComponent>    
                <Fragment>
                    <ListComponent  position={"relative"} list={NAV_ITEMS} isBGColor={false}/>
                    <SearchBarComponent />
                </Fragment>
            </HeaderComponent>
          <SubHeaderComponent />
    </>
}