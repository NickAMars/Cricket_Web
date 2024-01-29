import { Fragment, useEffect, useState } from "react";
import { HeaderComponent } from "./header.style"
import { ListComponent } from "@src/components/Lists/ListComponent";
import { NAV_ITEMS } from "@src/utility/navigation";
import { SearchBarComponent } from "@src/components/TextField/SearchBar";
import { SubHeaderComponent } from "../subheader";


export const Header: React.FC<{}> = (props) => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [width]);
    return <>
            { width > 900 && 
                <HeaderComponent>    
                    <Fragment>
                        <ListComponent  position={"relative"} list={NAV_ITEMS} isBGColor={false}/>
                        <SearchBarComponent />
                    </Fragment>
                </HeaderComponent>
            }
          <SubHeaderComponent width={width} />
    </>
}