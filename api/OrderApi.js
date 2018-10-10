const router = require("express").Router(),
    moment = require("moment"),
    {verifyToken,
     encrypt
    } = require("../helper")
    knex = require("../db/knex");




/*
|--------------------------------------------------------------------------
|  Order Api - Page where users see Orders 
|--------------------------------------------------------------------------
*/
router.get("/burr", (request, response) => {
    response.status(200).json({
        message: "You are viewing the Product Api"
    });
});




module.exports = router;