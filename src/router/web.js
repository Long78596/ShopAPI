const express=require("express");
const router=express.Router();

const CategoryControlle=require("../apps/controllers/category");
const ProductController=require("../apps/controllers/product");
const UploadMiddleware=require("../apps/middlewares/uploads");
router.get("/category",CategoryControlle.index);
router.get("/category/:id",CategoryControlle.show);
router.post("/category",CategoryControlle.store);
router.post("/category/:id",CategoryControlle.deleteCategory);
router.put("/category/:id",CategoryControlle.updateCategory);
router.get("/products",ProductController.index);
router.get("/products/:id",ProductController.show);
router.post("/products/:id",ProductController.delete);
router.get("/category/:id/products",ProductController.CategoryProducts);
router.post("/products/store",
UploadMiddleware.single("thumbnail"),
ProductController.store);
module.exports = router;
