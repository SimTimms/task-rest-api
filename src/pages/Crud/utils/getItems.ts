import getRestItems from "../../../service/getRestItems";
import { ItemArrayOptions, ItemArrayType, ItemType } from "../../../types";

const isValidItemArray = (items: ItemType[] | null | undefined): boolean => {
  return Array.isArray(items) && items.length > 0;
};

/**
 * Fetches items and updates the state with the fetched data or an appropriate status.
 *
 * @param {React.Dispatch<React.SetStateAction<ItemArrayType>>} setItemArray - State updater function for the item array and fetch result.
 * @returns {Promise<void>} - Resolves when the fetch operation is complete.
 */

async function getItems(
  setItemArray: React.Dispatch<React.SetStateAction<ItemArrayType>>
): Promise<void> {
  setItemArray({
    itemArray: [],
    fetchResult: ItemArrayOptions.Fetching,
  });
  try {
    const items = await getRestItems();
    if (isValidItemArray(items)) {
      setItemArray({ itemArray: [], fetchResult: ItemArrayOptions.Idle });
    } else {
      setItemArray({ itemArray: items, fetchResult: ItemArrayOptions.NoItems });
    }
  } catch (error) {
    setItemArray({
      itemArray: [],
      fetchResult: ItemArrayOptions.ErrorFetching,
    });
  }
}

export default getItems;
