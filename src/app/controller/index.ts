import { addProduct } from "../../core/services";
import { Request, Response, NextFunction } from "express";

export async function addNewProduct(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const data = await addProduct(req.body);
  res.json(data);
}

