const router = require("express").Router(),
    moment = require("moment"),
    {verifyToken,
     encrypt
    } = require("../helper")
    knex = require("../db/knex");





/*
|--------------------------------------------------------------------------
|  Login Api - Page where users login 
|--------------------------------------------------------------------------
*/
router.post("/login", (request, response) => {
    
});


/*
|--------------------------------------------------------------------------
|  SignUp Api - Page where users signup
|--------------------------------------------------------------------------
*/
router.post("/signup", (request, response) => {
    
});











module.exports = router;