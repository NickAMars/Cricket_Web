import { Box, styled } from "@mui/material"
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
    margin-top: -90px;
    & > * {
        margin: 12px;
    }
`;
const SmallContainer = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 5rem;
`;


export const SecondTopic: React.FC<{}> = (props) => {
    return <SecondTopicContainer>
            <MainCards>
                {largeCardList.map((card, i) => <LargeCard key={i} {...card}/>)}
            </MainCards>
            <SmallContainer>
                {LabelS1.map((label => <IconLabel {...label}/> ))}
            </SmallContainer>
    </SecondTopicContainer>
}