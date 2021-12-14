import React from "react";
import * as C from "./syles";

import Logo from "../../logo.svg";

export default function ItemCategory(props) {
  const list = props.dados;
  function env(id) {
    window.alert(id);
    props.SelectItem(id);
  }
  return (
    <C.Container>
      <h1>{list.category}</h1>
      <C.AreaItem>
        {list.items.map((item, index) => {
          return (
            <C.Item
              key={index}
              onClick={() => {
                env(item.id);
              }}
            >
              <C.Description>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </C.Description>
              <C.Img>
                <img src={Logo} alt="" />
              </C.Img>
              <C.Price>
                <p>R$ {item.price}</p>
              </C.Price>
            </C.Item>
          );
        })}
      </C.AreaItem>
    </C.Container>
  );
}
