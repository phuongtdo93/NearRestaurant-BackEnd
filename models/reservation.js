import mongoose from "mongoose";
import Restaurants from "./restaurant.js";

const ReservationsStatus =  {
    New: "New",
    Confirm: "Confirm",
    Served: "Served",
    Cancelled: "Cancelled",
}
export {ReservationsStatus};

const Reservations = mongoose.Schema ({
    id: mongoose.Types.ObjectId,
    userId: String,
    restaurant: Restaurants,
    numberOfPeople: Number,
    date: Date,
    time: Number,
    status: String
}, {
    timestamps: true
})
export default mongoose.model("Reservations", Reservations);