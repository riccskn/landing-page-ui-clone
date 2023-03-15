import React from "react";
import FacebookIcon from "../../assets/images/facebook.png";
import InstagramIcon from "../../assets/images/instagram.png";
import TiktokIcon from "../../assets/images/tiktok.png";
import YoutubeIcon from "../../assets/images/youtube.png";
import {
    Container,
    Footer,
    FormBox,
    FormContainer,
    FormInput,
    FormText,
    ListIcon,
    Logo,
    TextLinks,
    TextPhrase,
    TextsBox,
} from "./styles";
import { InputAdornment } from "@mui/material";
import { AccountCircle, TrendingFlat } from "@mui/icons-material";
import IconItem from "../IconItem";

export default function FooterArea() {
    return (
        <Footer>
            <Container>
                <TextsBox>
                    <Logo src={"http://localhost:9000/api/v1/images/logo"} />
                    <TextPhrase>
                        One of the best furniture
                        <br />
                        agency.
                    </TextPhrase>
                </TextsBox>
                <FormBox>
                    <FormText>Enter your email to get the laterst news</FormText>
                    <FormContainer>
                        <FormInput
                            placeholder={"Email Address"}
                            sx={{
                                "& fieldset": {
                                    color: "red",
                                    border: "none",
                                    borderBottom: "#141414 solid thin",
                                },
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <TrendingFlat
                                            style={{ color: "#141414", fontSize: "45px" }}
                                        />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </FormContainer>

                    <TextLinks>Follows us On</TextLinks>
                    <ListIcon>
                        <IconItem src={FacebookIcon} />
                        <IconItem src={InstagramIcon} />
                        <IconItem src={TiktokIcon} />
                        <IconItem src={YoutubeIcon} />
                    </ListIcon>
                </FormBox>
            </Container>
        </Footer>
    );
}
