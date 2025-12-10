import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  orderId: { type: Number, required: true },
  orderDate: { type: String, required: true },
  email: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "Registrationdetails"},
  items: [
    {
      id: Number,
      name: String,
      quantity: Number,
      price: Number,
      image: String,
      description: String,
    },
  ],

  totalAmount: Number,
  discountAmount: Number,
  buttonDiscountAmount: Number,
  couponDiscountAmount: Number,
  gst: Number,
  netAmount: Number,
});

// const orderModel = mongoose.model("orders", orderSchema);

export default orderSchema;




// import mongoose from "mongoose";

// const orderSchema = new mongoose.Schema({
//   orderId: { type: Number, required: true },
//   orderDate: { type: String, required: true },
//   email: { type: String, required: true },

//   items: [
//     {
//       id: Number,
//       name: String,
//       quantity: Number,
//       price: Number,
//       image: String,
//       description: String,
//     },
//   ],

//   totalAmount: Number,
//   discountAmount: Number,
//   buttonDiscountAmount: Number,
//   couponDiscountAmount: Number,
//   gst: Number,
//   netAmount: Number,
// }, { timestamps: true });

// export default orderSchema;

