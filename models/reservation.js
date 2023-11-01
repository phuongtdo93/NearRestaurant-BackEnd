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
    restaurant: {
        name: String,
        image: String
    },
    numberOfPeople: Number,
    date: Date,
    status: String
}, {
    timestamps: true
})
export {Reservations};