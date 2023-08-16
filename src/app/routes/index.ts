import { Router } from "express";

import { addNewProduct, deleteProductById, getAllProducts, updateProductRecord } from "../controller";

const router = Router();

router.post("/addproduct", addNewProduct);
router.get("/products", getAllProducts);
router.delete("/deleteproduct/:id", deleteProductById);
router.patch("/updateproduct/:id", updateProductRecord);


export default router;
