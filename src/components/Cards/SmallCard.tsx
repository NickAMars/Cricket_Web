import { Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import styled from "styled-components";


interface Props { 
    title: string, 
    subtopic: string,
    line: string,
    price: string
  }

const SmallCardContain = styled(Card)`
    width: 38rem;
    /* padding: 33px 20px; */
    border-radius: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content:  space-between;
    margin: 0 10px;
    box-shadow: 0 8px 16px rgba(0,0,0,.25);
`;

const Title = styled(Typography)`
    display: flex;
    justify-content: center;
`;
const SubTitle = styled(Typography)`
    margin-bottom: 20px;
`;
const Seperate = styled.div`
    display: flex;
    justify-content: space-between;
`;

const DealText = styled(Typography)`
    font-weight: 900;
`;
export const SmallCard: React.FC<Props> = (props) => {
    const { title, subtopic, line, price} = props;
    return (<SmallCardContain >
                <CardHeader title={<Title variant="h3">{title}</Title>}/>
                <CardContent>
                    <SubTitle variant="body1">{subtopic}</SubTitle>
                    <Seperate>
                        <DealText variant="subtitle1">{line}</DealText>
                        <DealText color="primary" variant="subtitle1">{price}</DealText>
                    </Seperate>
                </CardContent>
        </SmallCardContain>
    );
  };