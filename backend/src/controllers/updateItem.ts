import { NextFunction, Request, Response } from "express";
import { ItemType } from "../types/itemTypes";
import { Item } from "../models/Items";
import { v4 as uuidv4 } from "uuid";

interface UpdateItemRequest extends Request {
  body: {
    name: string;
    price: number;
  };
  params: {
    _id: string;
  };
}

const updateItem = async (
  req: UpdateItemRequest,
  res: Response,
  next: NextFunction
) => {
  const { name, price } = req.body;
  const { _id } = req.params;

  try {
    const itemToUpdate = await Item.findOne({ _id });
    if (!itemToUpdate) {
      res.status(404).json({ message: "Item not found" });
      return;
    }
    const newItem: ItemType = {
      _id: _id,
      name,
      price,
    };

    const savedTask = await itemToUpdate.update(newItem).save();
    res.status(201).json(savedTask);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export default updateItem;
