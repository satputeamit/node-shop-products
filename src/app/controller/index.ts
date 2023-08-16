import { addProduct, deleteProduct, getProducts, updateProduct } from "../../core/services";
import { Request, Response, NextFunction } from "express";

export async function addNewProduct(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const data = await addProduct(req.body);
  res.json(data);
}

export async function getAllProducts(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const data = await getProducts();
  res.json(data);
}

export async function deleteProductById(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {

  const data = await deleteProduct(req.params.id, req.body.user_id);
  res.json(data);
}

export async function updateProductRecord(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const data = await updateProduct(req.params.id, req.body);
  res.json(data);
}

