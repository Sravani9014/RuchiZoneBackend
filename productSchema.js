import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    id:Number,
    name:String,
    price:Number,
    image:String,
    desc:String
});
export{productSchema};