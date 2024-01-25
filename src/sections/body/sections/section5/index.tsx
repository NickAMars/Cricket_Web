import { ArticleContainer, Container, Line, Title } from "@src/app.style"
import { FifthStyle } from "./section5.style"
import { NationArticleCard } from "@src/components/Cards/NationArticleCard"
import { nationLists } from "@src/utility/nations"
import { Button, Typography } from "@mui/material"
import styled from "styled-components"
import TryCricket from "@assets/trycricket_2023.webp";

const ActionButton = styled(Button)`
    /* background-color: #3170B7; */
    /* padding: 1.5rem 3.5rem; */
    padding: 1.5rem 0;
    width: 25rem;
`;
const HiddenDetail = styled(Typography)`
    margin: 40px 0;
    text-align: center;
`;

const TryCricketContainer = styled.div`
    margin-top: 60px;
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const TryCricketSubContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 63rem;
    & > * {
        margin-bottom: 1rem;
    }
`
const Piture = styled.picture`
    display: flex;
    justify-content: flex-end;
    margin-right: 40px;
    height: 230px;
`
export const Section5: React.FC<{}> = (props) => {
    return <FifthStyle>
                <Line>
                    <Title variant="h3">From The Cricket Nation</Title>
                </Line>
                <Container>
                    <ArticleContainer>
                        {nationLists.map(nation => <NationArticleCard  key={nation.name} {...nation}/>)}
                    </ArticleContainer>
                    <HiddenDetail variant="body2">* Real customers paid for their testimonials</HiddenDetail>

                    <ActionButton color="info" variant="outlined" size="large">
                            <Typography variant="button">Explore Testimonials</Typography>
                    </ActionButton>
                </Container>
                <TryCricketContainer>
                        <Piture>
                            <img src={TryCricket} alt="tryCricket" />
                        </Piture>
                        <TryCricketSubContainer>
                            <Typography variant="h3">Try Cricket Wireless on Us</Typography>
                            <Typography variant="subtitle2">
                                People who come to Cricket stay with Cricket. Now you can see why. Our 14-day free trial lets you test-drive Cricket on your phone without disrupting your existing service with your current carrier.
                            </Typography>
                            <ActionButton color="info" variant="contained" size="large">Get TryCricket App</ActionButton>
                        </TryCricketSubContainer>
                    </TryCricketContainer>
            </FifthStyle>
}