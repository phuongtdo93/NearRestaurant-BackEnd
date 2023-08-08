import mongoose from "mongoose";
import Dishes from "./dish.js";

const OrdersStatus = {
    New: 'New',
    Delivered: 'Delivered',
    Cancelled: 'Cancelled',
}
export  {OrdersStatus};

const Orders = mongoose.Schema ({
    id: mongoose.Types.ObjectId,
    orderItem: [
        {
            dish: Dishes,
            price: Number,
            quantity: Number
        }
    ],
    userId: String,
    totalAmount: Number,
    status: String
}, {
    timestamps: true
})
export default mongoose.model("Orders", Orders);