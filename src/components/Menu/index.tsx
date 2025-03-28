import Button from "../Button";
import fetchItemsAndUpdateState from "../../pages/Crud/utils/fetchItemsAndUpdateState";
import { ItemArrayOptions, views, ItemContextType } from "../../types";
import ItemContext from "../../context/ItemContext";
import { useContext } from "react";
import changePage from "./utils/changePage";

const Menu: React.FC = () => {
  const contextValue = useContext(ItemContext) as ItemContextType;
  if (!contextValue) {
    throw new Error("ItemContext must be used within a valid provider.");
  }

  return (
    <>
      <Button
        text="Create"
        callback={() => changePage(views.Create, contextValue)}
      />
      <Button
        text="Read"
        callback={() => fetchItemsAndUpdateState(contextValue.setItemArray)}
        disabled={
          contextValue.itemArray.fetchResult === ItemArrayOptions.Fetching
        }
      />

      <Button
        text="Update"
        callback={() => changePage(views.Update, contextValue)}
      />
      <Button
        text="Delete"
        callback={() => changePage(views.Delete, contextValue)}
      />
    </>
  );
};

export default Menu;
