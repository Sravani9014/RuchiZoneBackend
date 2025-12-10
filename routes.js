// import express from "express";
// //import { createProduct } from "./controller";
// import { createProduct, deleteProductById, getAllProducts, getProductById, saveProduct,updateProduct,updateProductPatch ,saveVegItems,getAllVegItems,saveOrders,saveNonVegItems,getAllNonVegItems, getAllOrders, saveUserDetails, loginDetails, getOrdersByUser} from "./productController.js";
// import { authMiddleware } from "./authMiddleware.js";
// const router=express.Router();

// router.post("/register",saveUserDetails);
// router.post("/login",loginDetails);

// // router.get("/profile", authMiddleware, (req, res) => {
// //     res.json({
// //         message: "Token Verified Successfully",
// //         user: req.user
// //     });
// // });
//  router.use(authMiddleware);

// router.get("/getAll",getAllProducts);
// router.get("/getproductById/:id",getProductById);
// router.post("/save",createProduct);
// router.post("/saveall",saveProduct);
// router.delete("/delete/:id",deleteProductById);
// router.put("/update/:id",updateProduct);
// router.patch("/update/:id", updateProductPatch);
// router.post("/saveveg",saveVegItems);
// router.post("/savenonveg",saveNonVegItems);
// router.get("/veg",getAllVegItems);
// router.get("/nonveg",getAllNonVegItems);
//  router.post("/orders",saveOrders);
// // router.get("/allorders/user/:userId", getOrdersByUser);

// router.get("/allorders", getAllOrders);
// router.get("/allorders/user/:userId", authMiddleware,getOrdersByUser);

// export{router};



import express from "express";
import {
  getAllProducts,
  getProductById,
  createProductController,
  saveProduct,
  deleteProductById,
  updateProduct,
  updateProductPatch,
  saveVegItems,
  getAllVegItems,
  saveNonVegItems,
  getAllNonVegItems,
  saveOrders,
  getAllOrders,
  saveUserDetails,
  loginDetails,
  getOrdersByUserController,
  savedrinkItems,
  getAlldrinkItems
} from "./productController.js";

import { authMiddleware } from "./authMiddleware.js";

const router = express.Router();

// --- PUBLIC ROUTES ---
router.post("/register", saveUserDetails);
router.post("/login", loginDetails);
router.get("/veg", getAllVegItems);
router.get("/nonveg", getAllNonVegItems);
router.post("/drinks", savedrinkItems);
router.get("/getdrinks", getAlldrinkItems);
// --- PROTECTED ROUTES ---
router.use(authMiddleware);

router.get("/getAll", getAllProducts);
router.get("/getproductById/:id", getProductById);
router.post("/save", createProductController);
router.post("/saveall", saveProduct);
router.delete("/delete/:id", deleteProductById);
router.put("/update/:id", updateProduct);
router.patch("/update/:id", updateProductPatch);

router.post("/saveveg", saveVegItems);
//router.post("/drinks", savedrinkItems);


router.post("/savenonveg", saveNonVegItems);
router.get("/nonveg", getAllNonVegItems);

router.post("/orders", saveOrders);
router.get("/allorders", getAllOrders);
router.get("/allorders/user/:userId", getOrdersByUserController);

export { router };
