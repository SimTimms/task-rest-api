import React from "react";
import {ItemType} from "../types/itemTypes";
export default async function getItems(
  setState: React.Dispatch<React.SetStateAction<ItemType[]>>
) {
  return await fetch(`${import.meta.env.VITE_API}/items`)
    .then((res) => res.json())
    .then((data) => setState(data))
    .catch((err) => console.log(err));
}
