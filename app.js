import express, {json} from 'express';
import mongoose from "mongoose";
import morgan from 'morgan';
import cors from 'cors';
import * as dotenv from 'dotenv';
import CategoryRouter from "./routers/categoryRouter.js";
import RestaurantRouter from "./routers/restaurantRouter.js";
import ReservationRouter from "./routers/reservationRouter.js";
import OrderRouter from "./routers/orderRouter.js";
import UserRouter from "./routers/userRouter.js";
import checkToken from "./middleware/checkToken.js";
const app = express();

// app config
// app.set('x-powered-by', false);

app.use(cors());
// app.use(morgan('dev'));
app.use(json());
dotenv.config();

await mongoose.connect(process.env.DB_CONNECTION);
console.log("DB connected successfully!");


app.use('/categories', CategoryRouter)
app.use('/restaurants', checkToken.validateToken, RestaurantRouter)
app.use('/reservations', checkToken.validateToken, ReservationRouter)
app.use('/orders', checkToken.validateToken, OrderRouter)
app.use('/users', UserRouter)

// error handlers
app.all('*', (req, res, next) => {
    next(new Error('Route not found'));
});

app.use((error, req, res, next) => {
    res.status(500).json({ success: false, data: error.message });
});

app.listen(3000, () => {
    console.log('server is running ...');
});