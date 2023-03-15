import React from "react";
import "./styles";
import { DataContainer, DataNumber, DataTitle } from "./styles";

export default function (props) {
    return (
        <DataContainer>
            <DataNumber>{props.value}+</DataNumber>
            <DataTitle>{props.name}</DataTitle>
        </DataContainer>
    );
}
