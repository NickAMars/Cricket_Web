import { ArticleContainer, Container, Line, Title } from "@src/app.style"
import { FifthStyle } from "./section5.style"
import { NationArticleCard } from "@src/components/Cards/NationArticleCard"
import { nationLists } from "@src/utility/nations"
import { Button, Typography } from "@mui/material"
import styled from "styled-components"


const ActionButton = styled(Button)`
    /* background-color: #3170B7; */
    padding: 1.5rem 3.5rem;
    width: max-content;
`;
const HiddenDetail = styled(Typography)`
    margin: 40px 0;
    text-align: center;
`;
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
    </FifthStyle>
}