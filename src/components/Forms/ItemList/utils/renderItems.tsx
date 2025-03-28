import { ItemType } from "../../../types";

const renderItems = (itemArray: ItemType[]) => {
  if (itemArray.length === 0) {
    return null;
  }
  return itemArray.map((item) => <div key={item._id}>{item.name}</div>);
};
export default renderItems;
