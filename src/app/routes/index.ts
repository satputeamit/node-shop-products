import { Router } from "express";

import { addNewProduct, getAllProducts} from "../controller";

const router = Router();

router.post("/addproduct", addNewProduct);
router.get("/products", getAllProducts);


export default router;
