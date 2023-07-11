import Categories from "../models/category.js";

const CategoryService = {
    addCategory: async function(category){
        return await Categories.create(category);
    },
    getAll: async function(){
        return Categories.find({},{restaurants: 0});
    },
    getRestaurants: async function (isTrending, numOfTop, topNearYou){
        if (isTrending != undefined && isTrending == "true") {
            return await Categories.aggregate([{$unwind:"$restaurants"},{$match: {"restaurants.isTrending": true}}])
        }
        if (numOfTop) {
            return await Categories.aggregate([{$unwind:"$restaurants"},{$sort: {"restaurants.rate": 1}}]).limit(Number(numOfTop))
        }
        if (topNearYou) {
            return await Categories.aggregate([{$unwind:"$restaurants"},{$sort: {"restaurants.distance": 1}}]).limit(Number(topNearYou))
        }
        return await Categories.aggregate([{$unwind:"$restaurants"}]);
    }
}
export default CategoryService;