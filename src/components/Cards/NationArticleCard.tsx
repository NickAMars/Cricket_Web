import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import styled from "styled-components";

interface Props {
    Icon: any, 
    subtopic: string,
    name: string,
    location: string
  }

const NationArticleCardContain = styled(Card)`
    width: 32rem;
    padding: 0;
    border-radius: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    box-shadow: none;
    border: none;
    margin: 0 2rem;
`;
const CardImage = styled(CardMedia)`
    height: 17rem;
    width: 100%;
    @media only screen and (max-width: 55em) {
        height: 30rem;
    }
`;

const Content = styled(CardContent)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 25rem;
`;

const SubTitle = styled(Typography)`
    text-align: justify;
    margin-bottom: 1rem;
    font-weight: 600;
`;

const BioContainer = styled.div`
    & > *:first-child{
        font-weight: 600;
    }
    & > * {
        margin-bottom: 1rem;
    }
`;

const QuoteContainer = styled.blockquote`
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const NationArticleCard: React.FC<Props> = (props) => {
    const { Icon, subtopic, name, location} = props;
    return (<NationArticleCardContain >
                <CardImage
                    image={ Icon }
                    title="green iguana"
                    />
                <Content>
                    <QuoteContainer>
                        <SubTitle variant="body1">{subtopic}</SubTitle>
                    </QuoteContainer>
                
                    <BioContainer>
                        <Typography variant="body1">{name}</Typography>
                        <Typography variant="body1">{location}</Typography>
                    </BioContainer>
                </Content>
        </NationArticleCardContain>
    );
  };