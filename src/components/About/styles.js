import styled from "styled-components";
import {Button} from "@mui/material";

export const About = styled.section`

    width: 100%;
    height: 400px;
    margin-top: 465px;   

`

export const Container = styled.div`
    padding-top: 45px;
    width: 85%;
    height: 80%;
    margin: auto;

`
export const TextPhrase = styled.h2`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');

    margin-top: 20px;
    color: #333333;
    width: 100%;
    line-height: 170%;
    font-size: 36px;
    white-space: nowrap;
    font-family: 'Poppins', sans-serif;


`

export const InformationsBox = styled.div`

    width: 100%;
    margin-top: 60px;
    height: 525px;
    display: flex;
  
`

export const ImageBackground = styled.img`

    width: 80%;
    height: 95%;

`

export const SideBox = styled.div`

    display: flex;
    flex-direction: column;
    width: 30%;
    height: 100%;

`

export const AuthorCard = styled.div`
    
    position: relative;
    right: 90px;
    margin-top: 30px;
    display: flex;
    width: 276px;
    height: 80px;
    text-align: center;
    gap: 0;
    background-color: #FFFFFF;
`

export const TextsArea = styled.div`

    display: flex;
    flex-direction: column;
    padding-left: 0;
    gap: 0; 

`

export const AuthorPhoto = styled.img`

    margin-top: 15px;
    margin-left: 10px;
    width: 51px;
    height: 56px;
  
`

export const AuthorName = styled.p`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap'); 
  
    margin: 20px;
    font-weight: bold;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    

`

export const AuthorRole = styled.p`

    width: 40px;   
    margin-left: 20px;
    font-size: 18px;
    position: relative;
    bottom: 15px;
    white-space: nowrap;
    color: #9C9C9C;
    font-weight: 400;

`

export const CommentBox = styled.div`
    
   width: 100%;
   height: 60%; 
   margin-top: 70px;
   display: flex;
   gap: 0;
   flex-direction: column;
    
`

export const TextComment = styled.p`

    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  
    margin: auto;
    margin-top: 10px;
    height: 145px;
    color: #9C9C9C;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;

`

export const LearnMoreButton = styled(Button)`
  && {
    margin-bottom: 100px;
    margin-left: 50px; 
    background: #2C3878;
    border-radius: 3px;
    border: 0;
    color: #FFFFFF;
    font-weight: bolder;
    height: 48px;
    padding: 0 30px;
    width: 142px;
    text-align: center;
    white-space: nowrap;
    &:hover {
      background: #2C3878;
    }
  }
`;