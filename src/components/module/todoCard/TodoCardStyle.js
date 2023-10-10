import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 7px;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
`;

export const Text = styled.p`
width: 90%;
height: auto;
display: flex;
flex-direction: row;
justify-content: start;
align-items: start;
flex-wrap: wrap;
white-space: pre-wrap; 
font-size: 2.5vh;
`;

export const ButtonBox = styled.p`
width: 10%;
display: flex;
flex-direction: row;
justify-content: end;
align-items: center;
gap: 0.75vh;
`;

export const Button = styled.p`
font-size: 2.5vh;
cursor: pointer;
`;

export const Input = styled.input`
outline: none;
`;