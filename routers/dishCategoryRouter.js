import {Router} from 'express'
import checkToken from "../middleware/checkToken.js";
import RestaurantController from "../controllers/restaurantController.js";

const router = Router({mergeParams: true});
router.post("", checkToken.validateToken, RestaurantController.addDish);
router.patch("/:dishId", checkToken.validateToken, RestaurantController.setFavouriteDish);

export default router;