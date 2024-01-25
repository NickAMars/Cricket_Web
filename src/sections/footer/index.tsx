import { EmailTextFieldComponent } from "@src/components/TextField/EmailTextField"
import { FirstFooterStyle, FooterStyle, SignUpContainer, SignUpDescr, SignUpTitle } from "./footer.style"
import SimpleButton from "@src/components/Button/SimpleButton"

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
    </FooterStyle>
}