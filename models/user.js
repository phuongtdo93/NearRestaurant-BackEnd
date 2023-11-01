import mongoose from "mongoose";
import {Reservations} from "./reservation.js";


const Users = mongoose.Schema({
    id: mongoose.Types.ObjectId,
    email: String,
    password: String,
    reservations: [Reservations],
    favouriteRestaurants: [String], //The list of restaurant id
    favouriteDishes:[String] //The list of dish id

}, {
    timestamps: true
});
export default mongoose.model("Users", Users);