import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import styled from "styled-components";

interface Props {
    Icon: any, 
    title: string, 
    subtopic: string,
    smallDesc: string,
    buttonDesc: string
  }

const ArticleCardContain = styled(Card)`
    width: 32rem;
    padding: 0;
    border-radius: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content:  space-between;
    box-shadow: none;
    border: none;
    margin: 0 2rem;
`;
const CardImage = styled(CardMedia)`
    height: 17rem;
    width: 100%;
`;

const Title = styled(Typography)`
    display: flex;
    justify-content: center;
    font-weight: 500;
`;

const ActionButton = styled(Button)`
    color: #0288d1;
    font-size: 1.3rem;
    text-decoration: underline;
`;

const SubTitle = styled(Typography)`
    text-align: justify;
    margin-bottom: 10px;
`;
export const ArticleCard: React.FC<Props> = (props) => {
    const { Icon, title, subtopic, smallDesc, buttonDesc} = props;
    return (<ArticleCardContain >
                <CardImage
                    image={ Icon }
                    title="green iguana"
                    />
                <CardHeader title={<Title variant="subtitle2">{title}</Title>}/>
                <CardContent>
                    <SubTitle variant="body1">{subtopic}</SubTitle>
                    <SubTitle variant="body2">{smallDesc}</SubTitle>
                </CardContent>
                <CardActions>
                    <ActionButton disableFocusRipple disableRipple  size="large">{buttonDesc}</ActionButton>
                </CardActions>
        </ArticleCardContain>
    );
  };