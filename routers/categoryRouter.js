import {Router} from 'express'
import RestaurantController from "../controllers/restaurantController.js";

const router = Router();
router.post("", RestaurantController.addCategory);
router.get("", RestaurantController.getAllCategories);

export default router;