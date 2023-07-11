import Category from "../models/category.js";

const RestaurantService = {
    addRestaurant: async function(categoryId, restaurant){
        return await Category.updateOne({_id: categoryId}, {$push: {restaurants: restaurant}});
    }
}
export default RestaurantService;