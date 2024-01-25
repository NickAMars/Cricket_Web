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

const TryCricketContainer = styled(Typography)`
    margin-top: 60px;
    display: flex;
    & > * {
        flex: 1;
    }
`;

const TryCricketSubContainer = styled.div`
    display: flex;
    flex-direction: column;
    & > * {
        margin-bottom: 1rem;
    }
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
                    <TryCricketContainer>
                        <picture>
                            <img src={TryCricket} alt="tryCricket" />
                        </picture>
                        <TryCricketSubContainer>
                            <Typography variant="h3">Try Cricket Wireless on Us</Typography>
                            <Typography variant="subtitle2">
                                People who come to Cricket stay with Cricket. Now you can see why. Our 14-day free trial lets you test-drive Cricket on your phone without disrupting your existing service with your current carrier.
                            </Typography>
                            <ActionButton color="info" variant="contained" size="large">Get TryCricket App</ActionButton>
                        </TryCricketSubContainer>
                    </TryCricketContainer>
                </Container>
            </FifthStyle>
}