import {Router} from 'express'
import RestaurantController from "../controllers/restaurantController.js";
import RestaurantCategoryRouter from "./restaurantCategoryRouter.js";
import checkToken from "../middleware/checkToken.js";

const router = Router();
router.post("", checkToken.validateToken, RestaurantController.addCategory);
router.get("", RestaurantController.getAllCategories);
router.get("/restaurants", RestaurantController.getProducts);
router.use("/:categoryId/restaurants", RestaurantCategoryRouter)

export default router;