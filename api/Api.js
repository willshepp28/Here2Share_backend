
// const { Router } = require("express")
const router = require("express").Router(),
    moment = require("moment"),
    {verifyToken,
     encrypt
    } = require("../helper")
    knex = require("../db/knex");





/*
|--------------------------------------------------------------------------
|  Home page - This is the home page
|--------------------------------------------------------------------------
*/

router.get("/", async(request, response) => {
    
    const user = await knex("users")
        .join("address", 1, "address.userId")
        .then(user => {
             response.status(200).json(user);
        })
        .catch(error => response.status(400).json(error))   

});














module.exports = router;