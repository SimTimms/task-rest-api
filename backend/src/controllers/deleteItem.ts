import { NextFunction, Request, Response } from "express";

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
    //mongoDB Logic
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export default deleteItem;
