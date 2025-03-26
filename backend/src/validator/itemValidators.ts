import { body, param } from "express-validator";

export const validateCreateItem = [
  body("name").isString().isLength({ min: 1 }).withMessage("Name is required"),
  body("price").isNumeric().withMessage("Must be numeric"),
];

export const validateDeleteItem = [
  param("_id").notEmpty().withMessage("Id is required"),
];

export const validateUpdateItem = [
  ...validateCreateItem,
  param("_id").notEmpty().withMessage("Id is required"),
];
