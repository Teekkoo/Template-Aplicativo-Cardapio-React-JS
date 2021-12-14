import React from "react";
import * as C from "./styles";

export default function InfoMesa(props) {
  return (
    <C.Container>
      <h1>{props.name}</h1>
      <p> Posição Numero: {props.table}</p>
    </C.Container>
  );
}
