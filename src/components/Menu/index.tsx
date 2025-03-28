import Button from "../Button";
import getItems from "../../pages/Crud/utils/getItems";
import { ItemArrayOptions, ItemArrayType } from "../../types";

interface MenuProps {
  setItemArray: React.Dispatch<React.SetStateAction<ItemArrayType>>;
  itemArray: ItemArrayType;
}

const Menu: React.FC<MenuProps> = ({ setItemArray, itemArray }) => {
  return (
    <>
      <Button text="Create" callback={() => console.log("Create action")} />
      <Button
        text="Read"
        callback={() => getItems(setItemArray)}
        disabled={itemArray.fetchResult === ItemArrayOptions.Fetching}
      />
      <Button text="Update" callback={() => console.log("Update action")} />
      <Button text="Delete" callback={() => console.log("Delete action")} />
    </>
  );
};

export default Menu;
