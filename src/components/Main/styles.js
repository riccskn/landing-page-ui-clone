import styled from "styled-components";

export const Main = styled.section`

    width: 100%;
    height: 450px;
  

`

export const Container = styled.div`
    padding-top: 45px;
    width: 85%;
    height: 600px;
    margin: auto;

`

export const TextContainer = styled.div`

    width: 100%;
    display: flex;
    

`

export const HorizontalLine = styled.div`

  display: block;
  width: 100%;
  height: 2px;
  margin: 0;
  border: none;
  background-color: #000;
  position: relative;
  z-index: 2;
  top: 25px;
  
`

export const Title = styled.h1`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
    width: 691px; 
    margin-left: 12px;
    font-size: 42px;
    height: 303px;
    font-weight: bolder;
    font-family: 'Poppins', sans-serif; 
    z-index: 1;

`

export const DatasContainer = styled.div`

   width: 100%;
   height: 450px;
   display: flex;
   position: relative;
   bottom: 210px;

`

export const NumbersBlock = styled.div`
 
  margin-left: 730px;
  width: 300px;
  height: 440px;
  background-color: #2C3878;
  display: flex;
  flex-direction: column;
  z-index: 2;

`

export const BreakLine = styled.span`

  word-break: break-word;
    
`

export const CopyRight = styled.div`

  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

  -ms-transform: rotate(-90deg);
  transform: rotate(-90deg);
  height: 40px;
  font-family: 'Poppins', sans-serif;
  font-weight: lighter;
  position: relative;


`
export const ImageBackground = styled.img`

    width: 100%;
    height: 513px;
    z-index: 1;
    position: relative;
    bottom: 520px;
    

`