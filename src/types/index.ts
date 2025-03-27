export type ItemType = {
  _id: string;
  name: string;
  price: number;
};

export enum ItemArrayOptions {
  Idle = "Press READ to fetch items",
  Fetching = "Fetching",
  NoItems = "No items",
  ErrorFetching = "Error fetching items",
}

export type ItemArrayType = {
  itemArray: ItemType[];
  fetchResult: ItemArrayOptions;
};
