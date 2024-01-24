import { Coverage, CoverageAction, CoverageHeader, CoverageHidden, CoverageSubTopic, GlobalNetwork, HiddenDetail, MapButton, Plan, PlanContainer, PlanIncluded, PlanIncludedHeader, SecondStyle, StoreButton, WorldMap } from "./section2.style"
import { Container, Line, Title } from "@src/app.style";
import { IconCard } from "@src/components/Cards/IconCard";
import { SmallCard } from "@src/components/Cards/SmallCard";
import { SmallIconLabel } from "@src/components/DisplayIcon/SmallIconLabel";
import { planIncludeList, planList } from "@src/utility/plan";
import SimpleButton from "@src/components/Button/SimpleButton";
import World from "@assets/world_map.webp";


export const Section2: React.FC<{}> = (props) => {
    return <SecondStyle>
                <Line>
                    <Title variant="h3">Right Plan. Right Price</Title>
                </Line>
                <Container>
                    <Plan>
                        <IconCard title="Save" subtopic="with more lines!"/>
                        {planList.map(plan=> <SmallCard key={plan.line} {...plan} />)}
                    </Plan>
                    <PlanIncluded>
                        <PlanIncludedHeader variant="subtitle2">All Voice/Data Plans Include</PlanIncludedHeader>
                        <PlanContainer>
                            {planIncludeList.map( include => <SmallIconLabel key={include.text} {...include}/>)}
                            <SimpleButton text='Compare All Plans' />
                        </PlanContainer>
                        <HiddenDetail variant="body2">
                                *5G requires a compatible device and is not available everywhere. See our map for 5G coverage. Learn more about
                        </HiddenDetail>
                    </PlanIncluded>
                    <GlobalNetwork>
                        <WorldMap><img src={World} alt="world"/></WorldMap>
                        <Coverage>
                            <CoverageHeader variant="h3">
                                5G & 4G LTE coverage with Cricket!
                            </CoverageHeader>
                            <CoverageSubTopic variant="body1">
                                You want to stay connected to friends, family and work? Cricket's got you covered with a reliable cell phone network that covers 99% of Americans.
                            </CoverageSubTopic>
                            <CoverageHidden variant="body2">
                                *Based on coverage in U.S.
                            </CoverageHidden>
                            <CoverageAction>
                                <StoreButton variant="outlined">Find A Store Near You</StoreButton>
                                <MapButton variant="contained" color="info">Coverage Map</MapButton>
                            </CoverageAction>
                        </Coverage>
                    </GlobalNetwork>
                </Container>

            </SecondStyle>
}