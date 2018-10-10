const router = require("express").Router(),
    moment = require("moment"),
    {verifyToken,
     encrypt
    } = require("../helper")
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




module.exports = router;