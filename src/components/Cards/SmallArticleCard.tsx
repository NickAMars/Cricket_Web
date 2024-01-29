import { Button, Card, CardActions, CardHeader, Typography } from "@mui/material";
import styled from "styled-components";

interface Props {
    text: string,
    buttonDesc: string
  }

const SmallArticleCardContain = styled(Card)`
    border-radius: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content:  space-between;
    box-shadow: none;
    border: 1px solid #e1dfe1;
    padding: 2.5rem;
`;

const Title = styled(Typography)`
    font-weight: 700;
`;

const ActionButton = styled(Button)`
    padding: 1rem 2rem;
    width: 100%;
`;
export const SmallArticleCard: React.FC<Props> = (props) => {
    const { text, buttonDesc} = props;
    return (<SmallArticleCardContain >
                <CardHeader title={<Title variant="body1">{text}</Title>}/>
                <CardActions>
                    <ActionButton color="info" variant="outlined" size="large">
                        <Typography variant="button">{buttonDesc}</Typography>
                    </ActionButton>
                </CardActions>
        </SmallArticleCardContain>
    );
  };