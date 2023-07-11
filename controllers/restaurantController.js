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
            const {withRestaurant} = req.query;
            let result = await CategoryService.getAll(withRestaurant);
            return res.json(result);
        } catch (error) {
            next(error);
        }
    },
    addRestaurant: async function(req, res, next){
        try {
            const {categoryId} = req.params;
            const result = await RestaurantService.addRestaurant(categoryId, req.body);
            return res.json({success: true, data: result});
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
    },
    addDish: async function(req, res, next){
        try {
            const {categoryId, restaurantId} = req.params;
            const result = await DishService.addDish(categoryId,restaurantId, req.body);
            return res.json(result);
        } catch (error) {
            next(error);
        }
    }

}

export default RestaurantController;