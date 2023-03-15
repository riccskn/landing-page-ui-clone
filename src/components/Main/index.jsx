import React, {useEffect, useState} from "react";
import "./styles";
import {
    Main,
    Container,
    Title,
    BreakLine,
    TextContainer,
    HorizontalLine,
    DatasContainer,
    NumbersBlock,
    CopyRight,
    ImageBackground,
} from "./styles";
import DataBlock from "../DataBlock";
import {StatisticsService} from "../../services/StatisticsService";

export default function MainArea() {

    const [projectsCompleted, setProjectsCompleted] = useState(0);
    const [professionalTeams, setProfessionalTeams] = useState(0);
    const [yearsExperience, setYearsExperience] = useState(0);

    const service = new StatisticsService()
    
    const getCountProjectsCompleted = () => {

        return service.getCountProjectsCompleted()

    }

    const getCountProfessionalTeams = () => {

        return service.getCountProfessionals()

    }

    const getCountYearsExperience = () => {

        return service.getCountYearsExperience()

    }
    
    useEffect(() => {

        getCountProjectsCompleted()
            .then(res => setProjectsCompleted(res.data))

        getCountProfessionalTeams()
            .then(res => setProfessionalTeams(res.data))

        getCountYearsExperience()
            .then(res => setYearsExperience(res.data))

    }, [])

    return (
        <Main>
            <Container>
                <TextContainer>
                    <Title>
                        Design your
                        <br />
                        interior with high
                        <br />
                        quality.
                    </Title>
                    <HorizontalLine />
                </TextContainer>

                <DatasContainer>
                    <NumbersBlock>
                        <DataBlock name={"Project Completed"} value={projectsCompleted} />
                        <DataBlock name={"Professional Teams"} value={professionalTeams} />
                        <DataBlock name={"Years Experience"} value={yearsExperience} />
                    </NumbersBlock>

                    <CopyRight>
                        <p>2022</p>
                        <p>ALL RIGHT RESERVED</p>
                    </CopyRight>
                </DatasContainer>
                <ImageBackground src={"http://localhost:9000/api/v1/images/main-background"} />
            </Container>
        </Main>
    );
}
