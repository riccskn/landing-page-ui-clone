import React from "react";
import {
    Container,
    ContentsContainer,
    FirstBox,
    FirstImg,
    ImagesContainer,
    MainImage,
    Material,
    SecondBox,
    SecondImg,
    SeeMaterialsButton,
    TextDescription,
    TextPhrase,
    TextsContainer,
} from "./styles";
import SectionTitle from "../SectionTitle";

export default function MaterialArea() {
    return (
        <Material>
            <Container>
                <SectionTitle title={"MATERIAL"} />

                <ContentsContainer>
                    <TextsContainer>
                        <TextPhrase>
                            choice of
                            <br />
                            materials for
                            <br />
                            quality furniture.
                        </TextPhrase>
                        <TextDescription>
                            You can custom the material as desired. And our
                            <br />
                            furniture uses the best materials and selected quality
                            <br />
                            materials.
                        </TextDescription>
                        <SeeMaterialsButton>See Materials</SeeMaterialsButton>
                    </TextsContainer>
                    <ImagesContainer>
                        <FirstBox>
                            <MainImage src={"http://localhost:9000/api/v1/images/main-material-image"} />
                        </FirstBox>

                        <SecondBox>
                            <FirstImg src={"http://localhost:9000/api/v1/images/first-material-image"} />
                            <SecondImg src={"http://localhost:9000/api/v1/images/second-material-image"} />
                        </SecondBox>
                    </ImagesContainer>
                </ContentsContainer>
            </Container>
        </Material>
    );
}
