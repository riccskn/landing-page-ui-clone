import React from "react";
import { ArrowIcon, Card, CardNumber, CardTitle } from "./styles";

export default function ServiceCard(props) {
    return (
        <Card>
            <CardNumber>{props.number}</CardNumber>
            <CardTitle>{props.title}</CardTitle>
            <ArrowIcon style={{ fontSize: "40px" }} />
        </Card>
    );
}
