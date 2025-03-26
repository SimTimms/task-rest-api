import Button from "../components/Button";
import getItems from "../service/getItems";
import { useState } from "react";
import { ItemType } from "../types/itemTypes";

function Crud() {
  const [itemArray, setItemArray] = useState<ItemType[]>([]);

  function setItems() {
    try {
      getItems(setItemArray);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  }
  return (
    <div>
      <h1>CRUD</h1>
      <Button text="Create" />
      <Button text="Read" callback={setItems} />
      <Button text="Update" />
      <Button text="Delete" />
      <div>DISPLAY</div>
      {itemArray.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </div>
  );
}

export default Crud;
