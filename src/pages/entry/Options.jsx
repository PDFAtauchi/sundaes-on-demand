import axios from "axios";
import { useEffect, useState } from "react";
import ScoopOption from "pages/entry/ScoopOption";
import ToppingOption from "pages/entry/ToppingOption";
import Row from "react-bootstrap/Row";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => {
        // TODO: handle error response
      });
  }, [optionType]);

  const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));
  return <Row> {optionItems}</Row>;
}
