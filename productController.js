// // import { fetchAllProdcuts, fetchProductById,addProduct,addProduct1, deleteProduct,putProduct ,patchProduct,addVegItem,fetchVegItems,createOrders,addNonVegItem,fetchNonVegItems, fetchAllOrders} from "./productService.js";


// // const getAllProducts = (req, res) => {
// //     const products = fetchAllProdcuts();
// //     res.send(products);
// // };

// // const getProductById=(req,res) =>{
// //     let id=parseInt(req.params.id);
// //     let product=fetchProductById(id);
// //     res.send(product)
// // }

// // const createProduct=(req,res) =>{
// //     console.log("BODY RECEIVED:", req.body);
// //     let newProduct=req.body;
// //     addProduct(newProduct);
// //     res.send("Product added successfully");
// // }
// // const saveProduct=(req,res)=>{
// //     let newProduct=req.body;
// //     addProduct1(newProduct);
// //     res.send("All products added sucessfully");

// // }

// // let deleteProductById=(req,res)=>{
// //     let id=parseInt(req.params.id);
// //     deleteProduct(id);
// //     res.send("product deleted sucessfully");
// // }
// // let updateProduct=(req,res)=>{
// //     let id=parseInt(req.params.id);
// //     let newData=req.body;
// //     putProduct(id,newData);
// //     res.send("product updated sucessfully");
// // }

// // let updateProductPatch = async (req, res) => {
// //   let id = parseInt(req.params.id);
// //   let updatedFields = req.body;   // only partial fields

// //   await patchProduct(id, updatedFields);

// //   res.send("product updated successfully using PATCH");
// // };


// // let saveVegItems=async(req,res)=>{
// //     let newVegItem=req.body;
// //     addVegItem(newVegItem);
// //     res.send("veg items are saved sucessfully");
// // }

// // const getAllVegItems = async(req, res) => {
// //     const vegItems =await fetchVegItems();
// //     res.send(vegItems);
// // };


// // let saveOrders=(req,res)=>{
// //     let orderDetails=req.body;
// //     createOrders(orderDetails);
// //     res.send("orders are created sucessfully");
// // }

// // let saveNonVegItems=async(req,res)=>{
// //     let newNonVegItem=req.body;
// //     addNonVegItem(newNonVegItem);
// //     res.send("nonveg items are saved sucessfully");
// // }

// // const getAllNonVegItems = async(req, res) => {
// //     const nonvegItems =await fetchNonVegItems();
// //     res.send(nonvegItems);
// // };

// // const getAllOrders = async(req, res) => {
// //     const orders =await fetchAllOrders();
// //     res.send(orders);
// // };


// // export{ getAllProducts ,getProductById,createProduct,addProduct,saveProduct ,addProduct1,deleteProductById,updateProduct,updateProductPatch,saveVegItems,getAllVegItems,saveOrders,saveNonVegItems,getAllNonVegItems,getAllOrders};



// import {
//   fetchAllProdcuts,
//   fetchProductById,
//   addProduct,
//   addProduct1,
//   deleteProduct,
//   putProduct,
//   patchProduct,
//   addVegItem,
//   fetchVegItems,
//   createOrders,
//   addNonVegItem,
//   fetchNonVegItems,
//   fetchAllOrders,
//   registerDetails,
//   loginUser
// } from "./productService.js";

// import redis from "./redis.js";
// import { fetchOrdersByUser } from "./productService.js";


// // --------------------- PRODUCTS ------------------------ //

// const getAllProducts = async (req, res) => {
//   const cacheData = await redis.get("products");

//   if (cacheData) {
//     console.log("📌 Serving Products From Redis Cache");
//     return res.json(JSON.parse(cacheData));
//   }

//   const products = await fetchAllProdcuts();

//   await redis.set("products", JSON.stringify(products), { EX: 300 });

//   res.send(products);
// };


// const getProductById = async (req, res) => {
//   let id = parseInt(req.params.id);

//   const cacheData = await redis.get(`product:${id}`);

//   if (cacheData) {
//     console.log("📌 Serving Product By ID From Redis Cache");
//     return res.json(JSON.parse(cacheData));
//   }

//   let product = await fetchProductById(id);

//   await redis.set(`product:${id}`, JSON.stringify(product), { EX: 300 });

//   res.send(product);
// };


// const createProduct = async (req, res) => {
//   let newProduct = req.body;
//   await addProduct(newProduct);

//   await redis.del("products"); // clear cache

//   res.send("Product added successfully");
// };


// const saveProduct = async (req, res) => {
//   let newProduct = req.body;
//   await addProduct1(newProduct);

//   await redis.del("products");

//   res.send("All products added successfully");
// };


// const deleteProductById = async (req, res) => {
//   let id = parseInt(req.params.id);
//   await deleteProduct(id);

//   await redis.del("products");
//   await redis.del(`product:${id}`);

//   res.send("product deleted successfully");
// };


// const updateProduct = async (req, res) => {
//   let id = parseInt(req.params.id);
//   let newData = req.body;

//   await putProduct(id, newData);

//   await redis.del("products");
//   await redis.del(`product:${id}`);

//   res.send("product updated successfully");
// };


// const updateProductPatch = async (req, res) => {
//   let id = parseInt(req.params.id);
//   let newData = req.body;

//   await patchProduct(id, newData);

//   await redis.del("products");
//   await redis.del(`product:${id}`);

//   res.send("product updated using PATCH");
// };


// // --------------------- VEG ITEMS ------------------------ //

// const getAllVegItems = async (req, res) => {
//   const cacheData = await redis.get("vegitems");

//   if (cacheData) {
//     console.log("📌 Serving Veg Items From Cache");
//     return res.json(JSON.parse(cacheData));
//   }
//    console.log("📌 Fetching Veg Items From Database");


//   const vegItems = await fetchVegItems();
//    console.log(vegItems);
//   await redis.set("vegitems", JSON.stringify(vegItems), { EX: 300 });

//   res.send(vegItems);
// };

// const saveVegItems = async (req, res) => {
//   let data = req.body;
//   await addVegItem(data);

//   await redis.del("vegitems");

//   res.send("veg items saved successfully");
// };


// // ---------------------- NON VEG ---------------------------- //

// const getAllNonVegItems = async (req, res) => {
//   const cacheData = await redis.get("nonvegitems");

//   if (cacheData) {
//     console.log("📌 Serving Non-Veg Items From Cache");
//     return res.json(JSON.parse(cacheData));
//   }
//   console.log("📌 Fetching Non Veg Items From Database");


//   const items = await fetchNonVegItems();

//   await redis.set("nonvegitems", JSON.stringify(items), { EX: 300 });

//   res.send(items);
// };

// const saveNonVegItems = async (req, res) => {
//   let data = req.body;
//   await addNonVegItem(data);

//   await redis.del("nonvegitems");

//   res.send("nonveg items saved successfully");
// };


// // --------------------- ORDERS ---------------------------- //

// const saveOrders = async (req, res) => {
//   let order = req.body;
//       order.userId = req.user.id;  // ← IMPORTANT  // <- This ensures order is linked to logged-in user
//   await createOrders(order);

//   await redis.del("allorders");

//   res.send("orders saved successfully");
// };

//   //import { fetchOrdersByUser } from "./productService.js";

// const getOrdersByUser = async (req, res) => {
//   try {
//     const { userId } = req.params;

//     if (!userId) {
//       return res.status(400).json({ message: "User ID missing" });
//     }

//     const orders = await fetchOrdersByUser(userId);

//     return res.status(200).json(orders);
//   } catch (error) {
//     console.error("❌ Error fetching user orders:", error);
//     return res.status(500).json({
//       message: "Failed to fetch user orders",
//       error: error.message,
//     });
//   }
// };




// // const saveOrders = async (req, res) => {
// //   try {
// //     const saved = await createOrders(req.body);

// //     res.status(201).json({
// //       success: true,
// //       message: "Order saved",
// //       data: saved
// //     });

// //   } catch (err) {
// //     res.status(500).json({
// //       success: false,
// //       message: "Order save failed",
// //       error: err.message
// //     });
// //   }
// // };



// const getAllOrders = async (req, res) => {
//   const cacheData = await redis.get("allorders");

//   if (cacheData) {
//     console.log("📌 Serving Orders From Cache");
//     return res.json(JSON.parse(cacheData));
//   }
//   console.log("📌 Fetching Orders From Database");

//   const data = await fetchAllOrders();

//   await redis.set("allorders", JSON.stringify(data), { EX: 300 });

//   res.send(data);
// };

// // //user details
// // const saveUserDetails=async (req,res)=>{
// //  let userDetails = req.body;

// //      await registerDetails(userDetails);
// // };


// const saveUserDetails = async (req, res) => {
//   try {
//     let userDetails = req.body;
//     const savedUser = await registerDetails(userDetails);

//     res.status(201).json({
//       success: true,
//       message: "User registered successfully",
//       data: savedUser
//     });

//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Registration failed",
//       error: error.message
//     });
//   }
// };

// //login details
// // controllers/authController.js


// export const loginDetails = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Call service
//         const result = await loginUser(email, password);

//         return res.status(200).json({
//             message: result.message,
//             token: result.token,
//             user: result.user
//         });

//     } catch (err) {
//         return res.status(401).json({ error: err.message });
//     }
// };



// export {
//   getAllProducts,
//   getProductById,
//   createProduct,
//   saveProduct,
//   deleteProductById,
//   updateProduct,
//   updateProductPatch,
//   saveVegItems,
//   getAllVegItems,
//   saveOrders,
//   saveNonVegItems,
//   getAllNonVegItems,
//   getAllOrders,
//   saveUserDetails,getOrdersByUser
// };



import {
  fetchAllProdcuts,
  fetchProductById,
  addProduct,
  addProduct1,
  deleteProduct,
  putProduct,
  patchProduct,
  addVegItem,
  fetchVegItems,
  createOrders,
  addNonVegItem,
  fetchNonVegItems,
  fetchAllOrders,
  registerDetails,
  loginUser,
  fetchOrdersByUser,
  fetchdrinkItems,
  adddrinkItem
} from "./productService.js";

import redis from "./redis.js";

// --- PRODUCTS ---
export const getAllProducts = async (req, res) => {
  const cache = await redis.get("products");
  if (cache) return res.json(JSON.parse(cache));

  const products = await fetchAllProdcuts();
  await redis.set("products", JSON.stringify(products), { EX: 300 });
  res.json(products);
};

export const getProductById = async (req, res) => {
  const id = parseInt(req.params.id);
  const cache = await redis.get(`product:${id}`);
  if (cache) return res.json(JSON.parse(cache));

  const product = await fetchProductById(id);
  await redis.set(`product:${id}`, JSON.stringify(product), { EX: 300 });
  res.json(product);
};

export const createProductController = async (req, res) => {
  await addProduct(req.body);
  await redis.del("products");
  res.json({ message: "Product added successfully" });
};

export const saveProduct = async (req, res) => {
  await addProduct1(req.body);
  await redis.del("products");
  res.json({ message: "All products added successfully" });
};

export const deleteProductById = async (req, res) => {
  const id = parseInt(req.params.id);
  await deleteProduct(id);
  await redis.del("products");
  await redis.del(`product:${id}`);
  res.json({ message: "Product deleted successfully" });
};

export const updateProduct = async (req, res) => {
  const id = parseInt(req.params.id);
  await putProduct(id, req.body);
  await redis.del("products");
  await redis.del(`product:${id}`);
  res.json({ message: "Product updated successfully" });
};

export const updateProductPatch = async (req, res) => {
  const id = parseInt(req.params.id);
  await patchProduct(id, req.body);
  await redis.del("products");
  await redis.del(`product:${id}`);
  res.json({ message: "Product updated using PATCH" });
};

// --- VEG ---
export const saveVegItems = async (req, res) => {
  await addVegItem(req.body);
  await redis.del("vegitems");
  res.json({ message: "Veg items saved successfully" });
};
export const getAllVegItems = async (req, res) => {
  const cache = await redis.get("vegitems");
  // if (cache) return res.json(JSON.parse(cache));
  if (cache) {
    console.log("🥦 Veg items fetched from Redis cache");
    return res.json(JSON.parse(cache));
  }


  const vegItems = await fetchVegItems();
  await redis.set("vegitems", JSON.stringify(vegItems), { EX: 300 });
  console.log("🥦 Veg items fetched from database");
  res.json(vegItems);
};

// --- NON VEG ---
export const saveNonVegItems = async (req, res) => {
  await addNonVegItem(req.body);
  await redis.del("nonvegitems");
  res.json({ message: "Nonveg items saved successfully" });
};
export const getAllNonVegItems = async (req, res) => {
  const cache = await redis.get("nonvegitems");
  // if (cache) return res.json(JSON.parse(cache));
  if (cache) {
    console.log("🍗 Nonveg items fetched from Redis cache");
    return res.json(JSON.parse(cache));
  }

  const items = await fetchNonVegItems();
  await redis.set("nonvegitems", JSON.stringify(items), { EX: 300 });
  console.log("🍗 Nonveg items fetched from database");
  res.json(items);
};


// --- VEG ---
export const savedrinkItems = async (req, res) => {
  await adddrinkItem(req.body);
  await redis.del("drinkitems");
  res.json({ message: "drink items saved successfully" });
};
export const getAlldrinkItems = async (req, res) => {
  const cache = await redis.get("drinkitems");
  // if (cache) return res.json(JSON.parse(cache));
  if (cache) {
    console.log("🥦 Veg items fetched from Redis cache");
    return res.json(JSON.parse(cache));
  }


  const drinkItems = await fetchdrinkItems();
  await redis.set("drinkItems", JSON.stringify(drinkItems), { EX: 300 });
  console.log("🥦 drink items fetched from database");
  res.json(drinkItems);
};

// --- ORDERS ---
export const saveOrders = async (req, res) => {
  const order = req.body;
  order.userId = req.user.id;
  await createOrders(order);
  await redis.del("allorders");
  res.json({ message: "Orders saved successfully" });
};

export const getAllOrders = async (req, res) => {
  const cache = await redis.get("allorders");
  if (cache) return res.json(JSON.parse(cache));

  const orders = await fetchAllOrders();
  await redis.set("allorders", JSON.stringify(orders), { EX: 300 });
  res.json(orders);
};

export const getOrdersByUserController = async (req, res) => {
  const userId = req.params.userId;
  const orders = await fetchOrdersByUser(userId);
  res.json(orders);
};

// --- USERS ---
export const saveUserDetails = async (req, res) => {
  try {
    const user = await registerDetails(req.body);
    res.status(201).json({ message: "User registered successfully", user });
  } catch (err) {
    res.status(400).json({ message: "Registration failed", error: err.message });
  }
};

export const loginDetails = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await loginUser(email, password);
    res.json(result);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};
