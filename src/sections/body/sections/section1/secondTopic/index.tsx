import { Box, styled } from "@mui/material"
import { LargeCard } from "@src/components/LargeCard"
import { largeCardList } from "@src/utility/main-cards";

const SecondTopicContainer = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: -90px;
    & > * {
        margin: 12px;
    }
`;


export const SecondTopic: React.FC<{}> = (props) => {
    return <SecondTopicContainer>
                {largeCardList.map((card, i) => <LargeCard key={i} {...card}/>)}
            </SecondTopicContainer>
}