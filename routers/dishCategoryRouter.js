import {Router} from 'express'
import RestaurantController from "../controllers/restaurantController.js";

const router = Router({mergeParams: true});
router.post("", RestaurantController.addDish);


export default router;