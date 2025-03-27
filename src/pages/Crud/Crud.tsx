import "./Crud.css";
import Menu from "./components/Menu";
import { useState } from "react";
import ItemList from "../../components/ItemList";
import { ItemArrayType } from "../../types";
import { defaultState } from "./defaultState";

/**
 * A basic CRUD component demonstrating item fetching and button functionality.
 */

function Crud() {
  const [itemArray, setItemArray] = useState<ItemArrayType>(defaultState);

  return (
    <main>
      <section>
        <h1>CRUD</h1>
        <Menu setItemArray={setItemArray} itemArray={itemArray} />
      </section>
      <section className="item-list">
        <ItemList itemArray={itemArray} />
      </section>
    </main>
  );
}

export default Crud;
