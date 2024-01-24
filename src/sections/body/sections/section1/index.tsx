import { FirstTopic } from "./firstTopic"
import { SecondTopic } from "./secondTopic"
import { Section1Style } from "./section1.style"


export const Section1: React.FC<{}> = (props) => {
    return <Section1Style>
                <FirstTopic />
                <SecondTopic />
            </Section1Style>
}