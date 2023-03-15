import React from "react";
import "./styles";
import {
    Container,
    ImageBackground,
    Phrase,
    Service,
    ServicesContainer,
    TextDescription,
} from "./styles";
import SectionTitle from "../SectionTitle";
import ServiceCard from "../ServiceCard";

export default function ServiceArea() {
    return (
        <Service>
            <Container>
                <SectionTitle title={"SERVICE"} />
                <Phrase>attractive furniture with the best quality.</Phrase>

                <TextDescription>
                    Customize your interior design into a dream place
                    <br />
                    with the best designers and quality furniture. We try <br />
                    our best to fulfill your expectations.
                </TextDescription>

                <ServicesContainer>
                    <ServiceCard number={"01"} title={"Interior Design"} />
                    <ServiceCard number={"02"} title={"Consultant"} />
                    <ServiceCard number={"03"} title={"Construct Consultant"} />
                </ServicesContainer>
                <ImageBackground src={"http://localhost:9000/api/v1/images/service-background"} />
            </Container>
        </Service>
    );
}
