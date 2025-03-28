import { useState } from "react";
import ItemContext from "./ItemContext";
import { ItemArrayType } from "../types";
import { defaultState } from "./state/defaultState";

const ItemContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [itemArray, setItemArray] = useState<ItemArrayType>(defaultState);

  return (
    <ItemContext.Provider value={{ itemArray, setItemArray }}>
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
