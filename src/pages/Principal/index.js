import React, { useEffect, useState } from "react";
import * as C from "./styles";
import { Container } from "../../components/Container/styles";
import { dados } from "../../dados";

import Header from "../../components/Header";
import InfoMesa from "../../components/InfoMesa";
import ItemCategory from "../../components/ItemCategory";

export default function Principal() {
  const [data, setData] = useState(dados);
  const category = data.menu;

  useEffect(() => {
    const newList = data;
    setData(newList);
  }, [data]);

  function SelectItem(id) {
    window.alert(id);
    data.items.forEach((item) => {
      window.alert(id, "=", item.id);
    });
  }

  return (
    <Container>
      <Header name={data.name} />
      <C.AreaInfo>
        <InfoMesa name={data.name} table={data.table} />
      </C.AreaInfo>
      <C.AreaLista>
        {category.map((item, index) => {
          return <ItemCategory key={index} dados={item} func={SelectItem} />;
        })}
      </C.AreaLista>
      {/* <Footer/> */}
    </Container>
  );
}
