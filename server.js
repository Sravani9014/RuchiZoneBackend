// const express=require("express");
// const app=express();

// //simple get call says hello world 
// app.get("/greet",(req,res)=>{
//     res.send("Better job to get dont worry");
// })

// //get call to return the single product
// app.get("/singleproduct",(req,res)=>{
//     res.send({id:101,name:"srav",salary:20000.67});
// })

// //get call to return multiple products
// app.get("/mulpro",(req,res)=>{
//     res.send([{id:101,name:"srav",salary:90999},
//         {id:102,name:"chetu",salary:50000.67},
//         {id:103,name:"hani",salary:20000.67}

//     ]);
// })
// //get the product based on Id
// const employees=[
//     {id:101,name:"srav",salary:80890,dept:"dev"},
//     {id:102,name:"hani",salary:20000,dept:"hr"},
//     {id:103,name:"chetu",salary:30000,dept:"dev"},
//     {id:104,name:"pavani",salary:50000,dept:"dev"},

// ];
// app.get("/employee/:id",(req,res)=>{
//     const userid=parseInt(req.params.id);
//     const employee=employees.find(emp=>emp.id === userid);
//     if(employee){
//         res.send(employee);

//     }else{
//         res.send("employee not found on that id");
//     }
// })
// //get the products based on min amd max
// app.get("/user/filter",(req,res)=>{
//     const min=parseInt(req.query.min);
//     const max=parseInt(req.query.max);

//     const result=employees.filter(
//         emp=>emp.salary>=min && emp.salary<=max
//     );
//     res.send(result);
// })
// //get the user based on min
// app.get("/user",(req,res)=>{
//     const min=parseInt(req.query.min);
    

//     const result=employees.filter(
//         emp=>emp.salary>=min 
//     );
//     res.send(result);
// })
// //get the data based on max
// app.get("/user/max",(req,res)=>{
//     const max=parseInt(req.query.max);
    

//     const result=employees.filter(
//         emp=>emp.salary<=max 
//     );
//     res.send(result);
// })
// //get the user based on dept
// app.get("/user/dept",(req,res)=>{
//     const dept=req.query.dept;

    

//     const result=employees.filter(
//         emp=>emp.dept === dept
//     );
//     res.send(result);
// })
// //get the user based on dept and salary
// app.get("/user/mul",(req,res)=>{
//     const dept=req.query.dept;
//     //const sal=req.query.salary;

    

//     const result=employees.filter(
//         emp=>emp.dept === dept && emp.salary>40000
//     );
//     res.send(result);
// })

// //start the server and listen on port 3000
// app.listen(3000,()=>{
//     console.log("server is running on http://localhost:3000");
// });


import express from "express";
import { router } from "./routes.js";
import mongoose from "mongoose";
import cors from "cors";
import redis from "./redis.js";
import dotenv from "dotenv";

dotenv.config(); // LOAD .env
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/products",router)

//app.use('/images', express.static('public/images'));



//const MONGO_URL="mongodb+srv://sravanimamillapalli532_db_user:5rOE3R9RF1IoSRiP@cluster0.2vjuy6g.mongodb.net/?appName=Cluster0";
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("✅ MongoDB Connected Successfully"))
    .catch((err) => console.log("❌ MongoDB Connection Error:", err));

    app.listen(process.env.PORT, () => {
  console.log("server is running on http://localhost:3000");
});