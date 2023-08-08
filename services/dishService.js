import Categories from "../models/category.js";
const DishService = {
    addDish: async function (categoryId, restaurantId, dish){
        return await Categories.updateOne(
            {_id: categoryId, 'restaurants._id': restaurantId},
            {$push: {'restaurants.$.dishes': dish}}
        );
    },
    setFavouriteDish: async function(categoryId, restaurantId, dishId, isFavouriteValue){
        let isFavourite = isFavouriteValue ? isFavouriteValue : false;
        return await Categories.updateOne(
            { _id: categoryId, 'restaurants._id': restaurantId, 'restaurants.dishes._id': dishId },
            { $set: { 'restaurants.$[outer].dishes.$[inner].isFavourite': isFavourite } },
            { arrayFilters: [{ 'outer._id': restaurantId }, { 'inner._id': dishId }]}
        );
    },
}

export default DishService;