const router = require("express").Router(),
    moment = require("moment"),
    {verifyToken,
     encrypt
    } = require("../helper"),
    {
        createProduct
    } = require("../db/queries/productQuery")
    knex = require("../db/knex");




/*
|--------------------------------------------------------------------------
|  Product Api - Page where users see Products 
|--------------------------------------------------------------------------
*/
router.get("/", (request, response) => {
    response.status(200).json({
        message: "You are viewing the Product Api"
    });
});


/*
|--------------------------------------------------------------------------
|  Product Api - Page where users see Products 
|--------------------------------------------------------------------------
*/
router.post("/", (request, response) => {

    // table.increments();
            // table.string("product_name").notNullable();
            // table.text("product_image").notNullable();
            // table.integer("price").notNullable();
            // table.integer("userId").unsigned().references("id").inTable("users");
            // table.integer("categoryId").unsigned().references("id").inTable("categories");
        createProduct(request.body)
            .then(product => response.status(200).json(product))
            .catch(error => response.status(400).json(error));

});





module.exports = router;