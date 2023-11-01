import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserService from "../services/userService.js";
import userModel from  "../models/user.js";

const UserController = {
    login: async function(req, res, next){
        try {
            const { email, password } = req.body;
            const user = await userModel.findOne({ email }).lean();

            if (user) {
                const match = await bcrypt.compare(password, user.password);
                if (match) {
                    const jwtToken = jwt.sign({
                        ...user,
                        password: ''
                    }, process.env.SECRET_KEY);

                    res.json({
                        success: true,
                        data: jwtToken
                    });
                } else {
                    next(new Error("Wrong password"));
                }
            }
        } catch (error) {
            next(new Error("User not found"));
        }
    },
    signup: async function(req, res, next){
        try {
            const new_user = req.body;
            const { password: plain_password } = new_user;

            const hashed_password = await bcrypt.hash(plain_password, 10);
            const existUser = UserService.getUser(new_user.email, hashed_password);

            if (existUser) {
                next(new Error("User already exists"));
            }

            const result = await userModel.create({
                ...new_user,
                password: hashed_password
            });
            res.json({
                success: true,
                data: result
            });
        } catch (error) {
            next(error);
        }
    },
}

export default UserController