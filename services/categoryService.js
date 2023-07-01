import Categories from "../models/category.js";

const CategoryService = {
    addCategory: async function(category){
        return await Categories.create(category);
    },
    getAll: async function(){
        return Categories.find({},{restaurants: 0});
    },
    getRestaurants: async function (isTrending, isTop5){
        console.log(isTrending)
        console.log(isTop5)
        if (isTrending) {
            var res = await Categories.find({isTrending: true})
            return ;
        }
        if (isTop5) {
            return await Categories.aggregate([{$sort: {rate: 1}}])
        }
      return await Categories.aggregate([{$unwind:"$restaurants"}]);
    }
}
export default CategoryService;