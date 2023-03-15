import React from "react";
import Image from "../../assets/images/logo.png"
import "./styles"
import {Nav, Logo, Links, Item, Link, LinkHome, CustomButton, StyledButton} from "./styles";

export default function NavBar() {

    return (
        <Nav>
           <Logo src={"http://localhost:9000/api/v1/images/logo"}/>
             <Links>
                 <Item><LinkHome href={"#home"}>Home</LinkHome></Item>
                 <Item><Link href={"#home"}>About us</Link></Item>
                 <Item><Link href={"#home"}>Services</Link></Item>
                 <Item><Link href={"#home"}>Our teams</Link></Item>

                 <StyledButton >Contact us</StyledButton>
             </Links>

        </Nav>
    )

}