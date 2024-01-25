import { Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import styled from "styled-components";
import Plant from "@assets/plans_image_2023.webp";

interface Props { 
    title: string, 
    subtopic: string
  }

const IconCardContain = styled(Card)`
    width: 15rem;
    border-radius: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content:  space-between;
    box-shadow: 0 8px 16px rgba(0,0,0,.25);
`;
const CardImage = styled(CardMedia)`
    height: 8rem;
    width: 8rem;
    margin: 0 auto;
`;

const Title = styled(Typography)`
    display: flex;
    justify-content: center;
`;
const Header = styled(CardHeader)`
    font-weight: 900;
`;
export const IconCard: React.FC<Props> = (props) => {
    const { title, subtopic} = props;
    return (<IconCardContain >
                <Header title={<Title variant="subtitle1">{title}</Title>}/>
                <CardContent>
                    <Typography variant="body1">{subtopic}</Typography>
                </CardContent>
                <CardImage
                    image={ Plant }
                    title="green iguana"
                    />
        </IconCardContain>
    );
  };