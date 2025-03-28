import "./Crud.css";
import Menu from "../../components/Menu";
import { useState } from "react";
import ItemList from "../../components/ItemList";
import { ItemArrayType } from "../../types";
import { defaultState } from "./state/defaultState";

/**
 * A basic CRUD component demonstrating item fetching and button functionality.
 */

function Crud() {
  const [itemArray, setItemArray] = useState<ItemArrayType>(defaultState);

  return (
    <>
      <header>
        <h1>CRUD</h1>
      </header>
      <nav data-testid="menu-component">
        <Menu setItemArray={setItemArray} itemArray={itemArray} />
      </nav>
      <section
        className="item-list"
        data-testid="item-list-component"
        aria-label="item list"
      >
        <ItemList itemArray={itemArray} />
      </section>
    </>
  );
}

export default Crud;
