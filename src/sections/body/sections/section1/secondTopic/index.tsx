import { Box, styled } from "@mui/material"
import { Container, SmallContainer } from "@src/app.style";
import { LargeCard } from "@src/components/Cards/LargeCard"
import { IconLabel } from "@src/components/DisplayIcon/IconLabel";
import { LabelS1 } from "@src/utility/label-icons";
import { largeCardList } from "@src/utility/main-cards";

const SecondTopicContainer = styled(Box)`
    display: flex;
    flex-direction: column;
`;
const MainCards = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: -90px;
    @media only screen and (max-width: 56em) {
        margin: 0;
    }
    & > * {
        margin: 12px;
    }
`;



export const SecondTopic: React.FC<{}> = (props) => {
    return <SecondTopicContainer>
            <MainCards>
                {largeCardList.map((card, i) => <LargeCard key={i} {...card}/>)}
            </MainCards>
            <Container>
                <SmallContainer>
                    {LabelS1.map((label => <IconLabel key={label.text} {...label}/> ))}
                </SmallContainer>
            </Container>
    </SecondTopicContainer>
}