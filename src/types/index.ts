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

export enum views {
  Create = "Create",
  Read = "Read",
  Update = "Update",
  Delete = "Deletes",
}

export type ItemArrayType = {
  itemArray: ItemType[];
  fetchResult: ItemArrayOptions;
  view: views;
};

export type ItemContextType = {
  itemArray: ItemArrayType;
  setItemArray: React.Dispatch<React.SetStateAction<ItemArrayType>>;
};
