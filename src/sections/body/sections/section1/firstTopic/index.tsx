import styled from "styled-components";
import { FirstTopicStyle } from "./firstTopic.style"
import { Button, Typography } from "@mui/material";
import HeaderFirst from '@assets/header-first.webp'

const MainTopic = styled(Typography)`
    & > span {
        display: inline-block;
    }
`;
const SubTopic = styled(Typography)`
`;
const CtaContainer = styled.div`
    max-width: 360px;
    padding-top: 15px;
`;
const ButtonCta = styled(Button)`
    margin-top: 15px; 
    padding: 1rem 2rem;
    width: 100%;
    color: #3170B7;
    &:hover {
        background-color: #fff;
    }
`;
const Divider = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    & > * {
        flex: 1 0 45rem;
    }
`;

const Part1 = styled.div`
    max-width: 425px;
`;
const HeroLogo = styled.img`
`
export const FirstTopic: React.FC<{}> = (props) => {
    return <FirstTopicStyle>
                <Divider>
                    <Part1>
                        <MainTopic variant='h1'>
                                Try Cricket for Free
                        </MainTopic>
                        <SubTopic variant='h3'>Get a 14-day free trial of the Cricket Network without interrupting your current service. </SubTopic>
                        <CtaContainer>
                            <ButtonCta disableRipple variant="contained" color="secondary">Get the app now</ButtonCta>
                        </CtaContainer>
                    </Part1>
                    <div>
                        <HeroLogo src={HeaderFirst} alt="hero"/>
                    </div>
                </Divider>
    </FirstTopicStyle>
}