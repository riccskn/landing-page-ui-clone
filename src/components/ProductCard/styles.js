import styled from "styled-components";
import {TrendingFlat} from "@mui/icons-material";

export const Card = styled.div`

    width: 100%;
    margin-top: 73px;
    height: 30%;
    display: flex;
    font-family: 'Poppins', sans-serif;
    color: #333333;

`

export const NumberBox = styled.div`

    width: 20%;
    height: 100%;

`

export const TextBox = styled.div`

    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;

`

export const IconBox = styled.div`

    width: 20%;
    height: 100%;

`

export const Number = styled.p`

    font-size: 32px;
    font-weight: 600;
    line-height: 140%;

`

export const TextTitle = styled.p`
  
    font-size: 32px;
    line-height: 140%;
    font-weight: 600;

`

export const TextDescription = styled.p`
  
    margin-top: 20px;
    font-size: 20px;
    width: 60%;
    line-height: 160%;
  
  

`

export const ArrowIcon = styled(TrendingFlat)`
    width: 100%;
    font-size: 40px;
    margin-top: 20%;
    margin-left: 70%;

    svg {
      font-size: 35px; 
    }

`;
