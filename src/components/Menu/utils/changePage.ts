import { views, ItemContextType } from "../../../types";

function changePage(view: views, contextValue: ItemContextType) {
  if (!contextValue) {
    throw new Error("ItemContext must be used within a valid provider.");
  }

  contextValue.setItemArray({
    ...contextValue.itemArray,
    view: view,
  });
}
export default changePage;
