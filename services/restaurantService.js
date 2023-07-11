import Category from "../models/category.js";

const RestaurantService = {
    addProduct: async function(categoryId, product){
        return Category.updateOne({_id: categoryId}, {$push: {restaurants: product}});
    }

    // getAll: async function() {
    //     // return Category.find({})
    // },
    // getAllByCategory: async function(categoryId){}

}
export default RestaurantService;