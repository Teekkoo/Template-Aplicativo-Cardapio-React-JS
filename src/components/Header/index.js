import React from "react";
import * as C from "./styles";

export default function Header(props) {
  return (
    <C.Container>
      <C.Title>
        <h1>Seu Lista</h1>
        <p>Bem Vindo ao {props.name}</p>
      </C.Title>
    </C.Container>
  );
}
