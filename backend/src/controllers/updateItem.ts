import { NextFunction, Request, Response } from "express";

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
    //mongoDB Logic
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export default updateItem;
