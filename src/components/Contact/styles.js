import styled from "styled-components";
import {Button} from "@mui/material";

export const Contact = styled.section`

  width: 100%;
  height: 203px;
  background-color: #2C3878;
  margin-top: 200px;

`

export const Container = styled.div`
    width: 85%;
    height: 100%;
    margin: auto;

`

export const TextsContainer = styled.div`

   width: 100%;
   height: 100%;
   display: flex;
   

`

export const TextPhrase = styled.h2`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');

    padding-top: 41px;
    width: 50%;
    font-weight: bold;
    line-height: 170%;
    font-size: 36px;
    white-space: nowrap;
    font-family: 'Poppins', sans-serif;
    color: #FFFFFF;
    margin-bottom: 40px;


`

export const ContentsContainer = styled.div`

    width: 100%;
    height: 100%;
    display: flex;

`

export const ButtonBox = styled.div`

   width: 45%;
   height: 100%;
   display: flex;
   flex-direction: column;
  
`

export const TextBox = styled.div`

    width: 55%;
    height: 100%;

`

export const TextDescription = styled.p`

  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

  padding-top: 41px;
  margin-left: 75px;
  color: #D9D9D9;
  line-height: 160%; 
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
    
`

export const ContactButton = styled(Button)`
  && {
    background: #FFFFFF;
    border: #3C3C3C solid 1px;
    margin-top: 20px;
    margin-left: 75px;
    border-radius: 1px; 
    padding: 10px;
    text-transform: none;
    color: #3C3C3C;
    font-weight: bold;
    height: 48px;
    width: 142px;
    text-align: center;
    white-space: nowrap;
    &:hover {
      background: #FFFFFF;
    }
  }
`;
