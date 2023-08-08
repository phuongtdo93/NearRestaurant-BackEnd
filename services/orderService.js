import Orders from "../models/order.js";
import Category from "../models/category.js";

const OrderService = {
    addOrder: async function (order){
        return await Orders.create(order);
    },
    updateOrderItem: async function(orderId, OrderItemId, quantity){
        return await Category.updateOne(
            { _id: orderId, 'orderItem._id': OrderItemId },
            { $set: { 'orderItem.$.quantity': quantity } },
        );
    },
    updateOrderStatus: async function(orderId, orderStatus){
        return await Orders.updateOne({_id: orderId}, {$set: {status: orderStatus}});
    },
    getOrderOfUser: async function(userId){
        return await Orders.find({userId: userId});
    },
}

export default OrderService;