import RestaurantService from "../services/restaurantService.js";
import CategoryService from "../services/categoryService.js";
import DishService from "../services/dishService.js";

const RestaurantController = {
    addCategory: async function(req, res, next){
        try {
            const result = await CategoryService.addCategory(req.body);
            return res.json({success: true, data: result});
        } catch (error) {
            next(error);
        }
    },
    getAllCategories: async function(req, res, next){
        try {
            const result = await CategoryService.getAll();
            return res.json(result);
        } catch (error) {
            next(error);
        }
    },
    getProducts: async function(req, res, next){
        try {
            const {isTrending, numOfTop, topNearYou} = req.query
            const result = await CategoryService.getRestaurants(isTrending, numOfTop, topNearYou);
            return res.json(result);
        } catch (error) {
            next(error);
        }
    }

}

export default RestaurantController;