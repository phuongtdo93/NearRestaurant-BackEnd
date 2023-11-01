import {Router} from 'express'
import RestaurantController from "../controllers/restaurantController.js";
import DishCategoryRouter from "./dishCategoryRouter.js";
import checkToken from "../middleware/checkToken.js";

const router = Router({mergeParams: true});
router.get("", RestaurantController.getRestaurantByCategoryId);
router.get("/:restaurantId/images", RestaurantController.getRestaurantImages)
router.patch("/:restaurantId", checkToken.validateToken, RestaurantController.setFavouriteRestaurant);
router.use("/:restaurantId/dishes", DishCategoryRouter);


export default router;