// ===================================================
// IMPORTS
// ===================================================

import express, { Router, Response, Request } from "express";
import createItem from "../controllers/createItem";
import deleteItem from "../controllers/deleteItem";
import updateItem from "../controllers/updateItem";
import getItems from "../controllers/getItems";
import handleValidationErrors from "../middleware/handleValidationErrors";
import {
  validateCreateItem,
  validateDeleteItem,
  validateUpdateItem,
} from "../validator/itemValidators";
const router: Router = express.Router();

// ===================================================
// ROUTES
// ===================================================

router.get("/status", (req: Request, res: Response) => {
  res.status(200).json({ message: "OK" });
});

router.get("/", handleValidationErrors, getItems);
router.post("/", validateCreateItem, handleValidationErrors, createItem);
router.delete("/:_id", validateDeleteItem, handleValidationErrors, deleteItem);
router.put("/:_id", validateUpdateItem, handleValidationErrors, updateItem);

export default router;
