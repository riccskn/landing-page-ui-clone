import styled from "styled-components";
import {Button} from "@mui/material";

export const Material = styled.section`
     
    width: 100%;
    height: 545px;
    margin-top: 250px;
    
`

export const Container = styled.div`
    padding-top: 45px;
    width: 85%;
    height: 80%;
    margin: auto;

`

export const ContentsContainer = styled.div`

    width: 100%;
    height: 100%;
    display: flex;

`

export const TextsContainer = styled.div`

    width: 50%;
    height: 95%;
    display: flex;
    flex-direction: column;

`

export const TextPhrase = styled.h2`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');

    margin-top: 20px;
    color: #333333;
    width: 100%;
    line-height: 170%;
    font-size: 37px;
    font-weight: 600;
    white-space: nowrap;
    font-family: 'Poppins', sans-serif;


`

export const TextDescription = styled.p`

  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

  margin-top: 30px;
  height: 145px;
  color: #9C9C9C;
  line-height: 160%; 
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  white-space: nowrap;
  font-weight: 400;
    
`
export const ImagesContainer = styled.div`

   width: 90%;
   height: 95%;
   margin-left: 45px;
   display: flex;

`

export const FirstBox = styled.div`

   width: 100%;
   height: 100%;

`

export const SecondBox = styled.div`

   width: 70%;
   height: 100%;
   position: relative;
   bottom: 65px;

`

export const MainImage = styled.img`

    width: 100%;
    height: 100%;
    position: relative;
    top: 30px;

`

export const FirstImg = styled.img`

    margin-left: 40px;
    width: 100%;
    height: 60%;
   

`

export const SecondImg = styled.img`

    margin-left: 40px;
    margin-top: 40px;
    width: 80%;
    height: 40%;
   

`

export const SeeMaterialsButton = styled(Button)`
  && {
    background: #FFFFFF;
    border: #3C3C3C solid 1px;
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
    }
  }
`;