import styled from "styled-components"
import { Section1 } from "./sections/section1"
import { Section2 } from "./sections/section2"
import { Section3 } from "./sections/section3"
import { Section4 } from "./sections/section4"
import { Section5 } from "./sections/section5"

const BodyStyle = styled.main`
    display: flex;
    flex-direction:  column;
`;
export const Body: React.FC<{}> = (props) => {
    return <BodyStyle>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
    </BodyStyle>
}