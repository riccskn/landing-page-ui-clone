import styled from "styled-components";
import {Button} from "@mui/material";

export const Nav = styled.nav`

     width: 100%;
     height: 50px;
     display: flex;
     padding-top: 40px;

`

export const Logo = styled.img`

    width: 126px;
    height: 54px;
    padding-left: 120px;

`

export const Links = styled.ul`

  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,300&display=swap');
  
   width: 100%;
  
   display: flex;
   list-style: none;
   font-family: 'Poppins', sans-serif;
   margin-left: 240px;
`

export const Item = styled.li`
  
   padding-top: 20px;
   width: 50px;
   text-decoration: none;
   padding-right: 40px;
   padding-left: 40px;
   white-space: nowrap;
   
`

export const Link = styled.a`
  
   text-decoration: none;
   color: #333333;
   font-weight: lighter;
   font-size: 16px;
`

export const LinkHome = styled.a`

   @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
   font-family: 'Poppins', sans-serif;
   font-weight: bold;
   text-decoration: none;
   color: #333333;
  
`

export const StyledButton = styled(Button)`
  && {
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
    margin-right: 20px;
    &:hover {
      background: #2C3878;
    }
  }
`;


