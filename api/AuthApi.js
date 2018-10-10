const router = require("express").Router(),
    moment = require("moment"),
    {
        checkLoginCredentials,
        validateLoginCredentials,
        registerUser

    } = require("../db/queries/authQuery"),
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
 
/*
    Authenticates user by passing the request.body to the validateLoginCredentials function
*/
 validateLoginCredentials(request.body)
    .then(data => response.status(200).json(data))
    .catch(error => response.status(400).json(error));
      
});


/*
|--------------------------------------------------------------------------
|  SignUp Api - Page where users signup
|--------------------------------------------------------------------------
*/
router.post("/signup", (request, response) => {

    /*
        Passes the request.body to the checkLoginCredentials to make sure user actually send filled out inputs
        Then if the checkLoginCredentials function returns true, we send the request.body to the registerUser function to create a new user
    */
    if(checkLoginCredentials(request.body)) {
        registerUser(request.body)
            .then(token => response.status(200).json(token))
            .catch(error => response.status(400).json(error))
        
    }
    else {
      response.status(400).json(false);
    }
});











module.exports = router;