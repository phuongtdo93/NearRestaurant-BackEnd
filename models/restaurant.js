import mongoose from "mongoose";
import Dishes from "./dish.js";

const Restaurants = mongoose.Schema ({
    id: mongoose.Types.ObjectId,
    name: String,
    address: String,
    services: [String],
    dishes: [Dishes],
    rate: Number,
    distance: Number,
    longDescription: String,
    shortDescription: String,
    timeOpen: String,
    dayOfWeek: String,
    image: String,
    imageList: [String],
    isTrending: Boolean,
    isFavourite: Boolean,
    availableSeats: Number,
}, {
    timestamps: true
})
export default Restaurants