import {Router} from 'express'
import RestaurantController from "../controllers/restaurantController.js";
import DishCategoryRouter from "./dishCategoryRouter.js";

const router = Router({mergeParams: true});
router.post("", RestaurantController.addRestaurant);
router.patch("/:restaurantId", RestaurantController.setFavouriteRestaurant);

router.use("/:restaurantId/dishes", DishCategoryRouter);


export default router;