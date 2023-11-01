import {Router} from 'express'
import userController from "../controllers/userController.js";

const router = Router();
router.post("/login", userController.login);
router.post("/signup", userController.signup);

export default router;