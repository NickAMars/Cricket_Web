import { Card, CardHeader, CardMedia, Typography } from "@mui/material";
import styled from "styled-components";

interface Props {
    text: string,
    Image: any
  }

const SmallArticleCardContain = styled(Card)`
    width: 38rem;
    /* height: 17rem; */
    border-radius: 10px;
    display: flex;
    justify-content:  space-between;
    border: 1px solid #e1dfe1;
`;

const Title = styled(Typography)`
    font-weight: 700;
`;

const CardImage = styled(CardMedia)`
    flex-shrink: 0;
    width: 17rem;
    height: 17rem;
`;

export const PhoneArticleCard: React.FC<Props> = (props) => {
    const { text, Image} = props;
    return (<SmallArticleCardContain >
                <CardHeader title={<Title variant="body1">{text}</Title>}/>
                <CardImage
                    image={ Image }
                    title="green iguana"
                    />
        </SmallArticleCardContain>
    );
  };