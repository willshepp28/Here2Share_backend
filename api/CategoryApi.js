const router = require("express").Router(),
    moment = require("moment"),
    {getAll} = require("../db/queries/categoryQuery"),
    {verifyToken,
     encrypt
    } = require("../helper")
    knex = require("../db/knex");




/*
|--------------------------------------------------------------------------
|  Category Api - Page where users see Categories 
|--------------------------------------------------------------------------
*/
router.get("/", (request, response) => {
    getAll()
        .then(categories => response.status(200).json(categories))
        .catch(error => response.status(400).json(error))
});




module.exports = router;