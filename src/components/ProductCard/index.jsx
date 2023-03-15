import React from "react";
import {
    ArrowIcon,
    Card,
    IconBox,
    Number,
    NumberBox,
    TextBox,
    TextDescription,
    TextTitle,
} from "./styles";

export default function ProductCard(props) {
    return (
        <Card>
            <NumberBox>
                <Number>{props.number}</Number>
            </NumberBox>
            <TextBox>
                <TextTitle>{props.title}</TextTitle>
                <TextDescription>{props.description}</TextDescription>
            </TextBox>
            <IconBox>
                <ArrowIcon style={{ fontSize: "55px" }} />
            </IconBox>
        </Card>
    );
}
