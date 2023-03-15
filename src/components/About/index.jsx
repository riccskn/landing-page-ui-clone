import React from "react";
import {
    About,
    AuthorCard,
    AuthorName,
    AuthorPhoto,
    AuthorRole,
    CommentArea, CommentBox,
    CommentText,
    Container,
    ImageBackground,
    InfoContainer, InformationsBox,
    LearnMoreButton,
    Phrase,
    SideArea, SideBox, TextComment, TextPhrase,
    TextsArea,
} from "./styles";
import SectionTitle from "../SectionTitle";
import { StyledButton } from "../NavBar/styles";

export default function AboutArea() {
    return (
        <About>
            <Container>
                <SectionTitle title={"ABOUT"} />

                <TextPhrase>
                    “We're one of the best furniture agency. Prioritizing customers
                    <br />
                    and making purchases easy are the hallmarks of our agency.”
                </TextPhrase>

                <InformationsBox>
                    <ImageBackground src={"http://localhost:9000/api/v1/images/about-background"} />

                    <SideBox>
                        <AuthorCard>
                            <AuthorPhoto src={"http://localhost:9000/api/v1/images/author"} />
                            <TextsArea>
                                <AuthorName>Arga Danaan</AuthorName>
                                <AuthorRole>CEO of Dananz</AuthorRole>
                            </TextsArea>
                        </AuthorCard>

                        <CommentBox>
                            <TextComment>
                                Online learning with us
                                <br />
                                does not interfere with
                                <br />
                                your daily life. because
                                <br />
                                learning can be done
                                <br />
                                anytime and anywhere.
                            </TextComment>
                            <LearnMoreButton>Learn more</LearnMoreButton>
                        </CommentBox>
                    </SideBox>
                </InformationsBox>
            </Container>
        </About>
    );
}
