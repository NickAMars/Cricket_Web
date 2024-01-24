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
export const SmallCard: React.FC<Props> = (props) => {
    const { title, subtopic, line, price} = props;
    return (<SmallCardContain >
                <CardHeader title={<Title variant="h3">{title}</Title>}/>
                <CardContent>
                    <SubTitle variant="body1">{subtopic}</SubTitle>
                    <Seperate>
                        <Typography variant="subtitle1">{line}</Typography>
                        <Typography color="primary" variant="subtitle1">{price}</Typography>
                    </Seperate>
                </CardContent>
        </SmallCardContain>
    );
  };