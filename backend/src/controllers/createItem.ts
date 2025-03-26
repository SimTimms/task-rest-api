import { NextFunction, Request, Response } from "express";
import { ItemType } from "../types/itemTypes";
import { Item } from "../models/Items";
import { v4 as uuidv4 } from "uuid";

interface CreateItemRequest extends Request {
  body: {
    name: string;
    price: number;
  };
}

const createItem = async (
  req: CreateItemRequest,
  res: Response,
  next: NextFunction
) => {
  const { name, price } = req.body;

  const newItem: ItemType = {
    _id: uuidv4(),
    name,
    price,
  };

  try {
    const savedTask = await Item.create(newItem).save();
    res.status(201).json(savedTask);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export default createItem;
