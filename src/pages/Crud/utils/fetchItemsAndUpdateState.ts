import getRestItems from "../../../service/getRestItems";
import {
  ItemArrayOptions,
  ItemArrayType,
  ItemType,
  views,
} from "../../../types";

const isValidItemArray = (items: ItemType[] | null | undefined): boolean => {
  return Array.isArray(items) && items.length > 0;
};

/**
 * Fetches items and updates the state with the fetched data or an appropriate status.
 *
 * @param {React.Dispatch<React.SetStateAction<ItemArrayType>>} setItemArray - State updater function for the item array and fetch result.
 * @returns {Promise<void>} - Resolves when the fetch operation is complete.
 */

async function fetchItemsAndUpdateState(
  setItemArray: React.Dispatch<React.SetStateAction<ItemArrayType>>
): Promise<void> {
  setItemArray({
    itemArray: [],
    fetchResult: ItemArrayOptions.Fetching,
    view: views.Read,
  });
  try {
    const items = await getRestItems();
    if (isValidItemArray(items)) {
      setItemArray({
        itemArray: [],
        fetchResult: ItemArrayOptions.Idle,
        view: views.Read,
      });
    } else {
      setItemArray({
        itemArray: items,
        fetchResult: ItemArrayOptions.NoItems,
        view: views.Read,
      });
    }
  } catch (error) {
    setItemArray({
      itemArray: [],
      view: views.Read,
      fetchResult: ItemArrayOptions.ErrorFetching,
    });
  }
}

export default fetchItemsAndUpdateState;
