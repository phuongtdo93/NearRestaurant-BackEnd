import {Router} from 'express'
import RestaurantController from "../controllers/restaurantController.js";
import RestaurantCategoryRouter from "./restaurantCategoryRouter.js";

const router = Router();
router.post("", RestaurantController.addCategory);
router.get("", RestaurantController.getAllCategories);

router.use("/:categoryId/restaurants", RestaurantCategoryRouter)

export default router;