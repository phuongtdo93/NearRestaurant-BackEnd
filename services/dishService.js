import Categories from "../models/category.js";
const DishService = {
    addDish: async function (categoryId, restaurantId, dish){
        return await Categories.updateOne(
            {_id: categoryId, 'restaurants._id': restaurantId},
            {$push: {'restaurants.$.dishes': dish}}
        );
    }
}

export default DishService;