import {Router} from 'express'
import reservationController from "../controllers/reservationController.js";

const router = Router();
router.post("", reservationController.addReservation);
router.patch("/:reservationId", reservationController.updateReservation);
router.get("/user/:userId", reservationController.getReservationOfUser);

export default router;