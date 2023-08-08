import OrderService from "../services/orderService.js";
import {OrdersStatus} from "../models/order.js";
// import OrdersStatus from "../models/ordersStatus.js";


const OrderController = {
    addOrder: async function(req, res, next){
        try {
            let order = req.body;
            order.status = OrdersStatus.New;
            order.orderItem.map( x => x.price = x.dish.price);
            order.total = order.orderItem.reduce((sum, item) => sum + item.price*item.quantity, 0 );
            const result = await OrderService.addOrder(order);
            return res.json({success: true, data: result});
        } catch (error) {
            next(error);
        }
    },
    updateOrderItem: async function(req, res, next){
        try {
            const {orderId, orderItemId} = req.params;
            const {quantity} = req.body;
            const result = await OrderService.updateOrderItem(orderId, orderItemId, quantity);
            return res.json({success: true, data: result});
        } catch (error) {
            next(error);
        }
    },
    updateOrderStatus: async function(req, res, next){
        try {
            const {orderId} = req.params;
            const {status} = req.body;
            const result = await OrderService.updateOrderStatus(orderId, status);
            return res.json({success: true, data: result});
        } catch (error) {
            next(error);
        }
    },
    getOrderOfUser: async function(req, res, next){
        try {
            const {userId} = req.params;
            const result = await OrderService.getOrderOfUser(userId);
            return res.json({success: true, data: result});
        } catch (error) {
            next(error);
        }
    },
}

export default OrderController