const knex = require("../knex");




module.exports = {
    getAll: function(){
        return knex("products");
    },
    createProduct: function(productDetails, userId){
        return knex("products")
            .insert({
                product_name: productDetails.product_name,
                product_image: productDetails.product_image,
                price: productDetails.price,
                userId: parseInt(userId || productDetails.userId),
                categoryId: parseInt(productDetails.categoryId)
            })
            .returning("*")
    }
}

