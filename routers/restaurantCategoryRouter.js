import {Router} from 'express'
import RestaurantController from "../controllers/restaurantController.js";
import DishCategoryRouter from "./dishCategoryRouter.js";

const router = Router({mergeParams: true});
router.post("", RestaurantController.addRestaurant);
router.get("", RestaurantController.getRestaurantByCategoryId);
router.patch("/:restaurantId", RestaurantController.setFavouriteRestaurant);
router.get("/:restaurantId/images", RestaurantController.getRestaurantImages)

router.use("/:restaurantId/dishes", DishCategoryRouter);


export default router;