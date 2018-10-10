const router = require("express").Router(),
    knex = require("../db/knex");






router.get("/", (request, response) => {
    response.status(200).json({
        message: "You arrived at the home route"
    });
});





module.exports = router;