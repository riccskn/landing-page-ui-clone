import styled from "styled-components";
import {TrendingFlat} from "@mui/icons-material";

export const Card = styled.div`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
  
    width: 100%;
    font-weight: 600;
    font-style: normal;
    height: 70px;
    font-family: 'Poppins', sans-serif;
    display: flex;
    color: #333333;
    line-height: 140%;

`

export const CardNumber = styled.p`

    font-size: 24px;
    text-align: left;
    margin-top: 20px;

`

export const CardTitle = styled.p`

    width: 55%;
    font-size: 24px;
    margin-top: 20px;
    white-space: nowrap;
    margin-left: 50px;

`

export const ArrowIcon = styled(TrendingFlat)`
    width: 100%;
    margin-left: 200px;
    font-size: 40px;
    margin-top: 10px;

    svg {
      font-size: 35px; 
    }

`;

