import { EmailTextFieldComponent } from "@src/components/TextField/EmailTextField"
import { FirstFooterStyle, FootContain, FooterAncher, FooterAncherContainer, FooterAncherText, FooterHeader, FooterStyle, JoinContain, JoinMedia, SecondFooterStyle, SignUpContainer, SignUpDescr, SignUpTitle } from "./footer.style"
import SimpleButton from "@src/components/Button/SimpleButton"
import { AboutUs, CustomerSupport, FooterMedia, Legal } from "@src/utility/footer"

export const Footer: React.FC<{}> = (props) => {
    return <FooterStyle>
                <FirstFooterStyle>
                    <SignUpContainer>
                        <SignUpTitle variant="subtitle1">Sign up and Save!</SignUpTitle>
                        <SignUpDescr variant="body2">Get our latest offers via email. Read our privacy policy</SignUpDescr>
                    </SignUpContainer>
                    <EmailTextFieldComponent />
                    <SimpleButton text ="Sign me up" width="25rem"/>
                </FirstFooterStyle>

                <SecondFooterStyle>
                    <JoinContain>
                        <FooterHeader variant="subtitle1">Join the Cricket Nation</FooterHeader>
                        <JoinMedia>
                        { FooterMedia.map((Icon , i)=>  <Icon key={i}/>) }
                        </JoinMedia>
                    </JoinContain>
                    <FootContain>
                        <FooterHeader variant="subtitle1"> About Us </FooterHeader>
                        <FooterAncherContainer>
                        { AboutUs.map(about=>  <FooterAncher key={about}><FooterAncherText variant="body1">{about}</FooterAncherText></FooterAncher>) }
                        </FooterAncherContainer>
                    </FootContain>
                    <FootContain>
                        <FooterHeader variant="subtitle1"> Customer Support </FooterHeader>
                        <FooterAncherContainer>
                        { CustomerSupport.map(customer=>  <FooterAncher key={customer}><FooterAncherText variant="body1">{customer}</FooterAncherText></FooterAncher>) }
                        </FooterAncherContainer>
                    </FootContain>
                    <FootContain>
                        <FooterHeader variant="subtitle1"> Customer Support </FooterHeader>
                        <FooterAncherContainer>
                        { Legal.map(legal=>  <FooterAncher key={legal}><FooterAncherText variant="body1">{legal}</FooterAncherText></FooterAncher>) }
                        </FooterAncherContainer>
                    </FootContain>

                </SecondFooterStyle>
            </FooterStyle>
}