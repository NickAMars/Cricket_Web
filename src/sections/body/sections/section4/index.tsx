import { Container, Line, Title, SmallContainer } from "@src/app.style"
import { FourthStyle, PhoneDeals } from "./section4.style"
import { LabelS2 } from "@src/utility/label-icons";
import { IconLabel } from "@src/components/DisplayIcon/IconLabel";
import { dealList, phoneList } from "@src/utility/deal";
import { SmallArticleCard } from "@src/components/Cards/SmallArticleCard";
import { PhoneArticleCard } from "@src/components/Cards/PhoneArticleCard";

export const Section4: React.FC<{}> = (props) => {
    return <FourthStyle>
                <Line>
                    <Title variant="h3">Deals on Phones</Title>
                </Line>
                <PhoneDeals>
                    {dealList.map(deal => <SmallArticleCard key={deal.text} {...deal}/> )}
                    {phoneList.map(phone => <PhoneArticleCard key={phone.text} {...phone}/> )}
                </PhoneDeals>
                <Container>
                    <SmallContainer>
                        {LabelS2.map((label => <IconLabel key={label.text} {...label}/> ))}
                    </SmallContainer>
                </Container>
    </FourthStyle>
}