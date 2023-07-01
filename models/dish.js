import mongoose from "mongoose";

const Dishes = mongoose.Schema({
    id: mongoose.Types.ObjectId,
    name: String,
    description: String,
    rate: Number,
    price: Number,
    image: String,
});

export default Dishes;