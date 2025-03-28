import { createContext } from "react";
import { ItemContextType } from "../types";

const ItemContext = createContext<ItemContextType | null>(null);

export default ItemContext;
