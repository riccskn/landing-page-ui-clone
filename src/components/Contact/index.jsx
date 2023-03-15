import React from "react";
import {
    ButtonBox,
    ButtonContainer,
    Contact,
    ContactButton,
    Container,
    ContentsContainer,
    TextBox,
    TextDescription,
    TextPhrase,
    TextsContainer,
} from "./styles";

export default function ContactArea() {
    return (
        <Contact>
            <Container>
                <ContentsContainer>
                    <TextBox>
                        <TextPhrase>
                            let's discuss making your interior
                            <br />
                            like a dream place!
                        </TextPhrase>
                    </TextBox>
                    <ButtonBox>
                        <TextDescription>
                            Contact us below to work together to build your
                            <br />
                            amazing interior
                        </TextDescription>
                        <ContactButton>Contact Us</ContactButton>
                    </ButtonBox>
                </ContentsContainer>
            </Container>
        </Contact>
    );
}
