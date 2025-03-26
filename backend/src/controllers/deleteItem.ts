import { NextFunction, Request, Response } from "express";
import { Item } from "../models/Items";

interface DeleteItemRequest extends Request {
  params: {
    _id: string;
  };
}

const deleteItem = async (
  req: DeleteItemRequest,
  res: Response,
  next: NextFunction
) => {
  const { _id } = req.params;

  try {
    await Item.remove({ _id });
    res.status(204).json({ message: "Item deleted" });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export default deleteItem;
