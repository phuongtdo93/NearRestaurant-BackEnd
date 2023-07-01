import {Router} from 'express'
import RestaurantController from "../controllers/restaurantController.js";

const router = Router();
router.get("", RestaurantController.getProducts);

export default router;