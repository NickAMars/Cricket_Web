import { FirstTopic } from "./firstTopic"
import { SecondTopic } from "./secondTopic"
import { Section1Style } from "./section1.style"
import { ThirdTopic } from "./thirdTopic"


export const Section1: React.FC<{}> = (props) => {
    return <Section1Style>
                <FirstTopic />
                <SecondTopic />
                <ThirdTopic />
            </Section1Style>
}