// // import mongoose from "mongoose";
// // import { productSchema } from "./productSchema.js";
// // import orderSchema from "./orderSchema.js";



// // const fetchAllProdcuts=()=>{
// //     return products;
// // }

// // const fetchProductById =(id)=>{
// //     let product=products.find(p=>p.id===id);
// //     return product;
// // }

// // // const saveProduct=(newProduct)=>{
// // //     products.push(newProduct);
// // // }


// // // //create the model
// // //  let productModel=mongoose.model("products",productSchema);
// // // // //give the input to model
// // // // let addProduct=(newProduct)=>{
// // // //     new productModel(newProduct).save();
// // // // }


// // //  export{fetchAllProdcuts , fetchProductById,addProduct,addProduct1,deleteProduct,putProduct};


// // let addProduct = async (newProduct) => {
// //   try {
// //     const product = await productModel.create(newProduct);
// //     return product;
// //   } catch (error) {
// //     console.error("Error adding product:", error);
// //     throw error;
// //   }
// // };

// // let addProduct1= async (newProduct)=>{
// //   await productModel.insertMany(newProduct);
// // }

// // let deleteProduct=async (id)=>{
// //   const product=await vegModel.deleteOne({id: id});
// //   return product;
// // }


// // let putProduct = async (id, newData) => {
// //   return await productModel.replaceOne(
// //     { id: id },   // find product by id
// //     newData       // replace entire document with new data
// //   );
// // };

// // let patchProduct = async (id, updatedFields) => {
// //   return await productModel.updateOne(
// //     { id: id },
// //     { $set: updatedFields }   
// //   );
// // };


// // //create the model
// //  //let productModel=mongoose.model("vegTable",productSchema);

// //  let vegModel = mongoose.model("vegTable", productSchema);
// // // //give the input to model
// //  let addVegItem=async(newVegItem)=>{
// //     //  return await new productModel(newVegItem).save();
// //     return await vegModel.insertMany(newVegItem);
// //  }


// // const fetchVegItems=async()=>{
// //    return await vegModel.find(); 
// // }

// // const orderModel = mongoose.model("order", orderSchema);
// // let createOrders = async(orderDetails) => {
// //  return await new orderModel(orderDetails).save();
// // };


// //  let nonVegModel = mongoose.model("Nonveg", productSchema);
// // // //give the input to model
// //  let addNonVegItem=async(newNonVegItem)=>{
// //     //  return await new productModel(newVegItem).save();
// //     return await nonVegModel.insertMany(newNonVegItem);
// //  }

// //  const fetchNonVegItems=async()=>{
// //    return await nonVegModel.find(); 
// // }
// //  const fetchAllOrders=async()=>{
// //    return await orderModel.find();
// // }

// //  export{fetchAllProdcuts , fetchProductById,addProduct,addProduct1,deleteProduct,putProduct,patchProduct,addVegItem,fetchVegItems,createOrders,addNonVegItem,fetchNonVegItems,fetchAllOrders};


// import mongoose from "mongoose";
// import { productSchema } from "./productSchema.js";
//  import orderSchema from "./orderSchema.js";
// import { userSchema } from "./userSchema.js";
// import jwt from "jsonwebtoken";

// // MODELS
// const productModel = mongoose.model("Product", productSchema);
// const vegModel = mongoose.model("vegtable", productSchema);
// const nonVegModel = mongoose.model("NonVeg", productSchema);
// const orderModel = mongoose.model("Orders", orderSchema);
// const registrationModel=mongoose.model("Registrationdetails",userSchema)


// // PRODUCTS
// const fetchAllProdcuts = async () => await productModel.find();

// const fetchProductById = async (id) => await productModel.findOne({ id });

// const addProduct = async (newProduct) => await productModel.create(newProduct);

// const addProduct1 = async (data) => await productModel.insertMany(data);

// const deleteProduct = async (id) =>
//   await productModel.deleteOne({ id });

// const putProduct = async (id, newData) =>
//   await productModel.replaceOne({ id }, newData);

// const patchProduct = async (id, fields) =>
//   await productModel.updateOne({ id }, { $set: fields });


// // VEG
// const addVegItem = async (item) => await vegModel.insertMany(item);
// const fetchVegItems = async () => await vegModel.find();


// // NON VEG
// const addNonVegItem = async (item) => await nonVegModel.insertMany(item);
// const fetchNonVegItems = async () => await nonVegModel.find();


// // ORDERS
// // const createOrders = async (o) => await new orderModel(o).save();




//  const createOrders = async (order) => {
//   return await orderModel.create(order);
// };

// const fetchAllOrders = async () => await orderModel.find();

// //details

// //  const registerDetails = async (data) => {
// //   const existingUser = await registrationModel.findOne({ email: data.email });

// //   if (existingUser) {
// //     throw new Error("Email already registered");
// //   }

// //   const user = new registrationModel(data);
// //   return await user.save();
// // };
//  const registerDetails = async (data) => {
//   const user = new registrationModel(data);
//   return await user.save();
// };

// //login detsils
// // services/authService.js
// export const fetchOrdersByUser = async (userId) => await orderModel.find({
//     userId: new mongoose.Types.ObjectId(userId)
//   });



// export const loginUser = async (email, password) => {
//     // Find user by email
//     const user = await registrationModel.findOne({ email });
//     if (!user) {
//         throw new Error("Invalid Email");
//     }

//     // Plain password comparison
//     if (user.password !== password) {
//         throw new Error("Invalid Password");
//     }

//     // Generate JWT Token
//     const token = jwt.sign(
//         {
//             id: user._id,
//             email: user.email
//         },
//         process.env.JWT_SECRET,
//         { expiresIn: process.env.JWT_EXPIRES_IN }
//     );

//     // Return user + token
//     return {
//         message: "Login successful",
//         token,
//         user
//     };
// };


// export {
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
//   registerDetails
  
// };


import mongoose from "mongoose";
import { productSchema } from "./productSchema.js";
import orderSchema from "./orderSchema.js";
import { userSchema } from "./userSchema.js";
import jwt from "jsonwebtoken";

// MODELS
const productModel = mongoose.model("Product", productSchema);
const vegModel = mongoose.model("VegTable", productSchema);
const nonVegModel = mongoose.model("NonVeg", productSchema);
const drinkModel = mongoose.model("Drink", productSchema);
const orderModel = mongoose.model("Orders", orderSchema);
const registrationModel = mongoose.model("RegistrationDetails", userSchema);

// --- PRODUCTS ---
export const fetchAllProdcuts = async () => await productModel.find();
export const fetchProductById = async (id) => await productModel.findOne({ id });
export const addProduct = async (newProduct) => await productModel.create(newProduct);
export const addProduct1 = async (data) => await productModel.insertMany(data);
export const deleteProduct = async (id) => await productModel.deleteOne({ id });
export const putProduct = async (id, newData) => await productModel.replaceOne({ id }, newData);
export const patchProduct = async (id, fields) => await productModel.updateOne({ id }, { $set: fields });

// --- VEG ---
export const addVegItem = async (item) => await vegModel.insertMany(item);
export const fetchVegItems = async () => await vegModel.find();

// --- NON VEG ---
export const addNonVegItem = async (item) => await nonVegModel.insertMany(item);
export const fetchNonVegItems = async () => await nonVegModel.find();


// --- drinks ---
export const adddrinkItem = async (item) => await drinkModel.insertMany(item);
export const fetchdrinkItems = async () => await drinkModel.find();

// --- ORDERS ---
export const createOrders = async (order) => await orderModel.create(order);
export const fetchAllOrders = async () => await orderModel.find();
export const fetchOrdersByUser = async (userId) =>
  await orderModel.find({ userId: new mongoose.Types.ObjectId(userId) });

// --- USER ---
export const registerDetails = async (data) => await registrationModel.create(data);
export const loginUser = async (email, password) => {
  const user = await registrationModel.findOne({ email });
  if (!user) throw new Error("Invalid Email");
  if (user.password !== password) throw new Error("Invalid Password");

  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  return { message: "Login successful", token, user };
};
