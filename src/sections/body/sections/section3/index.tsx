import { Container, Line, Title } from "@src/app.style"
import { ArticleContainer, ThirdStyle } from "./section3.style"
import { ArticleCard } from "@src/components/Cards/ArticleCard"
import { articleList } from "@src/utility/articles";

export const Section3: React.FC<{}> = (props) => {
    return <ThirdStyle>
                <Line>
                    <Title variant="h3">More With Cricket </Title>
                </Line>
                <Container>
                    <ArticleContainer>
                        {articleList.map(article=> <ArticleCard key={article.title} {...article}/>)}      
                    </ArticleContainer>

                </Container>
            </ThirdStyle>
}