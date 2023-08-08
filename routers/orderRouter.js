import {Router} from 'express'
import orderController from "../controllers/orderController.js";

const router = Router();
router.post("", orderController.addOrder);
router.patch("/:orderId/orderItem/:orderItemId", orderController.updateOrderItem);
router.patch("/:orderId", orderController.updateOrderStatus);
router.get("/user/:userId", orderController.getOrderOfUser);

export default router;