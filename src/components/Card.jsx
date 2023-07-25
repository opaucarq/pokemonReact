import React from "react";
import styled from "@emotion/styled";

const ImgStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 256px;
  height: 356px;
  border-radius: 0 24px 0 24px;
  background-color: red;
  img {
    width: 90%;
    height: 90%;
  }
  p {
    position: absolute;
    width: 248px;
    bottom: 0;
    text-align: center;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-weight: 600;
    font-size: 32px;
    margin: 0 auto;
    padding: 4px;
    text-transform: capitalize;
    background-color: black;
    color: white;
    border-radius: 0 0 0 24px;
  }
`;

const Card = ({ pokemon }) => {
  return (
    <ImgStyled>
      <img src={pokemon.sprites.other["official-artwork"]["front_default"]} />
      <p>{pokemon.name}</p>
    </ImgStyled>
  );
};

export default Card;
