import { NextFunction, Request, Response } from "express";
import resolvers from "../graphql/resolvers";

const getItems = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await resolvers.getItems();
    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export default getItems;
