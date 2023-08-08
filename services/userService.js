import Users from "../models/user.js";

const UserService = {
    addUser: async function (user){
        return await Users.create(user)
    }
}

export default UserService;