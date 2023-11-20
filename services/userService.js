import Users from "../models/user.js";

const UserService = {
    addUser: async function (user){
        return await Users.create(user)
    },
    getUser: async function (email, password){
        return await Users.find({email: email, password: password})
    },
    getByEmail: async function (email) {
        return await Users.findOne({email: email})
    }
}

export default UserService;