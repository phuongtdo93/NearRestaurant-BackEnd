import UserService from "../services/userService.js";

const UserController = {
    addUser: async function(req, res, next){
        try {
            const  result = await UserService.addUser(req.body);
            return res.json({success: true, data: result});
        } catch (error) {
            next(error);
        }
    },
}

export default UserController