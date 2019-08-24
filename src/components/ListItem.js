import React from "react";
import Item from "./Item";

export default function ListItem({ items }) {
  return items.map((item, index) => <Item key={index} item={item} />);
}
