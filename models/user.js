import mongoose from "mongoose";
import {Reservations} from "./reservation.js";


const Users = mongoose.Schema({
    id: mongoose.Types.ObjectId,
    email: String,
    password: String,
    reservation: [Reservations]
}, {
    timestamps: true
});
export default mongoose.model("Users", Users);