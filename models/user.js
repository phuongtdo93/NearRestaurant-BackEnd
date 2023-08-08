import mongoose from "mongoose";

const Users = mongoose.Schema({
    id: mongoose.Types.ObjectId,
    username: String,
    password: String
});
export default mongoose.model("Users", Users);