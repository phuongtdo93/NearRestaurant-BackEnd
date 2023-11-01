import {Router} from 'express'
import RestaurantController from "../controllers/restaurantController.js";
import RestaurantCategoryRouter from "./restaurantCategoryRouter.js";

const router = Router();
router.get("", RestaurantController.getAllCategories);
router.get("/restaurants", RestaurantController.getProducts);
router.use("/:categoryId/restaurants", RestaurantCategoryRouter)

export default router;