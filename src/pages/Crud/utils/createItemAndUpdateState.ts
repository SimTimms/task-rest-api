import { ItemArrayOptions, ItemArrayType, ItemType } from "../../../types";

async function createItemAndUpdateState(
  setItemArray: React.Dispatch<React.SetStateAction<ItemArrayType>>
): Promise<void> {
  setItemArray({
    itemArray: [],
    fetchResult: ItemArrayOptions.Fetching,
  });
}

export default createItemAndUpdateState;
