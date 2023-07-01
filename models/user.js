import mongoose from "mongoose";
import Restaurants from "./restaurant.js";
import Dishes from "./dish.js";

const Users = mongoose.Schema({
    id: mongoose.Types.ObjectId,
    deviceId: String,
    favouriteRestaurants: [Restaurants],
    favouriteDishes: [Dishes]
});
export default mongoose.model("Users", Users);