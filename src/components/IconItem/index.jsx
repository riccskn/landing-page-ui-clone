import React from "react";
import { Item, ItemImage } from "./styles";

export default function IconItem(props) {
    return (
        <Item>
            <ItemImage src={props.src} />
        </Item>
    );
}
