import renderItems from "./utils/renderItems";
import { ItemArrayType } from "../../types";

interface ItemListProps {
  itemArray: ItemArrayType;
}
const ItemList: React.FC<ItemListProps> = ({ itemArray }) => {
  return (
    <div role="list">
      {Array.isArray(itemArray.itemArray) && renderItems(itemArray.itemArray)}
      {itemArray.fetchResult}
    </div>
  );
};

export default ItemList;
