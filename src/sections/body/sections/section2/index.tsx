
import ButtonComponent from "@src/components/Button/NavigationButton";
import { HiddenDetail, Plan, PlanContainer, PlanIncluded, PlanIncludedHeader, SecondStyle } from "./section2.style"
import { Line, SectionTitle } from "@src/app.style";
import { IconCard } from "@src/components/Cards/IconCard";
import { SmallCard } from "@src/components/Cards/SmallCard";
import { SmallIconLabel } from "@src/components/DisplayIcon/SmallIconLabel";
import { planIncludeList, planList } from "@src/utility/plan";
import { Button } from "@mui/material";
import SimpleButton from "@src/components/Button/SimpleButton";


export const Section2: React.FC<{}> = (props) => {
    return <SecondStyle>
                <Line>
                    <SectionTitle variant="subtitle1">Right Plan. Right Price</SectionTitle>
                </Line>
                <Plan>
                    <IconCard title="Save" subtopic="with more lines!"/>
                    {planList.map(plan=> <SmallCard {...plan} />)}
                </Plan>
                <PlanIncluded>
                    <PlanIncludedHeader variant="subtitle2">All Voice/Data Plans Include</PlanIncludedHeader>
                    <PlanContainer>
                        {planIncludeList.map( include => <SmallIconLabel {...include}/>)}
                        <SimpleButton text='Compare All Plans' />
                    </PlanContainer>
                    <HiddenDetail variant="body2">
                            *5G requires a compatible device and is not available everywhere. See our map for 5G coverage. Learn more about
                    </HiddenDetail>
                </PlanIncluded>

            </SecondStyle>
}