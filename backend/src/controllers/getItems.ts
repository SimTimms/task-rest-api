import { NextFunction, Request, Response } from "express";
import { Item } from "../models/Items";

const getItems = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await Item.find({ $limit: 40 });
    if (!items) {
      res.status(200).json({ message: "Items not found" });
    }
    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export default getItems;
