import styled from "styled-components";
import {TextField} from "@mui/material";

export const Footer = styled.footer`

    width: 100%;
    height: 395px;

`

export const Container = styled.div`
  
    width: 85%;
    height: 100%;
    margin: auto;
    display: flex;

`

export const TextsBox = styled.div`

    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;

`

export const Logo = styled.img`

    width: 126px;
    height: 54px;
    margin-top: 80px;
  
`

export const TextPhrase = styled.h2`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');

    margin-top: 10px;
    color: #333333;
    width: 100%;
    line-height: 170%;
    font-size: 37px;
    font-weight: 600;
    white-space: nowrap;
    font-family: 'Poppins', sans-serif;


`

export const FormBox = styled.div`

    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;

`

export const FormText = styled.h2`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
    margin-top: 100px;
    margin-left: 120px;
    color: #333333;
    width: 90%;
    line-height: 170%;
    font-size: 18px;
    font-weight: 400;
    white-space: nowrap;
    font-family: 'Poppins', sans-serif;

  &::before {
    content: '\\2022'; /* use the Unicode character as a bullet point */
    margin-top: 5px;
    margin-right: 15px;
    font-size: 50px;
    position: relative;
    top: 10px;
  }

`

export const FormContainer = styled.form`
   display: flex;
`;

export const FormInput = styled(TextField)`
  && {
    margin-top: 20px;
    margin-left: 120px;
    width: 4000px;
    border: none;
    border-bottom: #141414 solid 1px;

    input {
      &::placeholder {
        color: #b9b9b9;
      }
    }

  }

`;

export const TextLinks = styled.p`

    font-size: 16px;
    color: #333333;
    margin-left: 350px;
    margin-top: 40px;

`

export const ListIcon = styled.div`

    width: 250px;
    margin-top: 11px;
    margin-left: 325px;
    height: 70px;
    display: flex;
    flex-direction: row;
  
    &:hover {
      cursor: pointer;
    }

`
