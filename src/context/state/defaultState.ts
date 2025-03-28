import { ItemArrayOptions, ItemArrayType, views } from "../../types";

export const defaultState: ItemArrayType = {
  itemArray: [],
  fetchResult: ItemArrayOptions.Idle,
  view: views.Read,
};
