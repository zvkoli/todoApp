import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: #ffffff;
`;

export const Header = styled.div`
  width: 100%;
  height: 30vh;
  background: rgb(80,164,223);
  background: linear-gradient(90deg, rgba(80,164,223,1) 0%, rgba(1,88,149,1) 100%); 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
width: 70%;
position: relative;
top: 12vh;
font-size: 5vh;
color: #ffffff;
`;

export const InputBox = styled.div`
width: 70%;
height: 20vh;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background-color: #ffffff;
border-radius: 7px;
position: relative;
top: 14vh;
/* box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px; */
box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
`;