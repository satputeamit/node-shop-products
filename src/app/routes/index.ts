import { Router } from "express";

import { addNewProduct} from "../controller";

const router = Router();

router.post("/addproduct", addNewProduct);


export default router;
