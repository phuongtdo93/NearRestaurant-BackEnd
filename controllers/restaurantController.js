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
            const result = await CategoryService.getAll(isTrending, isTop5);
            return res.json(result);
        } catch (error) {
            next(error);
        }
    },
    getProducts: async function(req, res, next){
        try {
            const {isTrending, isTop5} = req.query
            const result = await CategoryService.getRestaurants(isTrending, isTop5);
            return res.json(result);
        } catch (error) {
            next(error);
        }
    }

}

export default RestaurantController;