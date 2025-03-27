import "./Crud.css";
import Button from "../../components/Button";
import { useState } from "react";
import getItems from "./utils/getItems";
import ItemList from "../../components/ItemList";
import { ItemArrayOptions, ItemArrayType } from "../../types";

/**
 * A basic CRUD component demonstrating item fetching and button functionality.
 */

function Crud() {
  const [itemArray, setItemArray] = useState<ItemArrayType>({
    itemArray: [],
    fetchResult: ItemArrayOptions.Idle,
  });

  return (
    <main>
      <section>
        <h1>CRUD</h1>
        <Button text="Create" callback={() => console.log("Create action")} />
        <Button
          text="Read"
          callback={() => getItems(setItemArray)}
          disabled={itemArray.fetchResult === ItemArrayOptions.Fetching}
        />
        <Button text="Update" callback={() => console.log("Update action")} />
        <Button text="Delete" callback={() => console.log("Delete action")} />
      </section>
      <section className="item-list">
        <ItemList itemArray={itemArray} />
      </section>
    </main>
  );
}

export default Crud;
