import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import styled from "styled-components";


interface Props {
    Icon: any, 
    title: string, 
    subtopic: string,
    smallDesc: string,
    buttonDesc: string
  }

const LargeCardContain = styled(Card)`
    width: 38rem;
    padding: 33px 20px;
    border-radius: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content:  space-between;
`;
const CardImage = styled(CardMedia)`
    height: 25rem;
    width: 100%;
    margin: 0 auto;
`;

const Title = styled(Typography)`
    display: flex;
    justify-content: center;
`;

const ActionButton = styled(Button)`
    color: #fff;
    width: 100%;
    background-color: #3170B7;
    padding: 1.7rem 3rem;
    &:hover{
        background-color: #003E7F;
    }
`;
export const LargeCard: React.FC<Props> = (props) => {
    const { Icon, title, subtopic, smallDesc, buttonDesc} = props;
    return (<LargeCardContain >
                <CardHeader title={<Title variant="subtitle1">{title}</Title>}/>
                <CardImage
                    image={ Icon }
                    title="green iguana"
                    />
                <CardContent>
                <Typography variant="body1">{subtopic}</Typography>
                <Typography variant="body2">{smallDesc}</Typography>
                </CardContent>
                <CardActions>
                    <ActionButton variant="contained" size="large">{buttonDesc}</ActionButton>
                </CardActions>
        </LargeCardContain>
    );
  };