import mongoose from "mongoose";
import Restaurants from "./restaurant.js";

const Categories = mongoose.Schema ({
    id: mongoose.Types.ObjectId,
    name: String,
    restaurants: [Restaurants]
})

export default mongoose.model("Categories", Categories);