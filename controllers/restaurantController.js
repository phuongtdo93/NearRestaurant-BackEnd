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
    getRestaurantByCategoryId: async function(req, res, next){
        try {
            const {categoryId} = req.params;
            const result = await RestaurantService.getRestaurantByCategoryId(categoryId);
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
    },
    addDish: async function(req, res, next){
        try {
            const {categoryId, restaurantId} = req.params;
            const result = await DishService.addDish(categoryId,restaurantId, req.body);
            return res.json(result);
        } catch (error) {
            next(error);
        }
    },
    setFavouriteRestaurant: async function(req, res, next){
        try {
            const {categoryId, restaurantId} = req.params;
            const { isFavourite } = req.query
            const result = await RestaurantService.setFavouriteRestaurant(categoryId,restaurantId, isFavourite);
            if (result.modifiedCount > 0) {
                return res.json({success: true})
            }
            else {
                return res.json({success: false})
            }
        } catch (error) {
            next(error);
        }
    },
    setFavouriteDish: async function(req, res, next){
        try {
            const {categoryId, restaurantId, dishId} = req.params;
            const { isFavourite } = req.query
            const result = await DishService.setFavouriteDish(categoryId,restaurantId, dishId, isFavourite);
            return res.json(result);
        } catch (error) {
            next(error);
        }
    },
    getRestaurantImages: async function(req, res, next) {
        try {
            // try {
            //     const {categoryId, restaurantId} = req.params
            //     const result = await RestaurantService.getRestaurantById(categoryId, restaurantId);
            //     console.log(result.restaurants);
            //     return res.json(result);
            // } catch (error) {
            //     next(error);
            // }
            let result = []
            for (let i = 0; i < 30; i++) {
                result.push("https://s3.us-west-2.amazonaws.com/images.unsplash.com/application-1688213434869-d9e3e4ed414dimage")
            }
            return res.json(result);
        } catch (err) {
            next(err)
        }
    },

}

export default RestaurantController;