import {Router} from 'express'
import RestaurantController from "../controllers/restaurantController.js";

const router = Router();
router.post("/category", RestaurantController.addCategory);
router.post("", RestaurantController.addRestaurant);

export default router;