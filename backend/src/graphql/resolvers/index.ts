import Item from "../models/item";

const resolvers = {
  getItems: async () => {
    return await Item.find();
  },
  getItem: async ({ id }: { id: string }) => {
    return await Item.findById(id);
  },
  createItem: async ({ name, price }: { name: string; price: number }) => {
    const newItem = new Item({ name, price });
    return await newItem.save();
  },
};

export default resolvers;
