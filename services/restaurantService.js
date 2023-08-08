import Category from "../models/category.js";

const RestaurantService = {
    addRestaurant: async function(categoryId, restaurant){
        return await Category.updateOne({_id: categoryId}, {$push: {restaurants: restaurant}});
    },
    setFavouriteRestaurant: async function (categoryId, restaurantId, isFavouriteValue) {
        let isFavourite = isFavouriteValue ? isFavouriteValue : false
        return await Category.updateOne(
            { _id: categoryId, 'restaurants._id': restaurantId },
            { $set: { 'restaurants.$.isFavourite': isFavourite } },
        );
    }
}
export default RestaurantService;