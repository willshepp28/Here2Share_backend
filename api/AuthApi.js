const router = require("express").Router(),
    moment = require("moment"),
    {
        checkLoginCredentials,
        validateLoginCredentials,
        registerUser

    } = require("../db/queries/authQuery"),
    {
        addUserAddress
    } = require("../db/queries/addressQuery"),
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

    console.log(request.body);
    if(checkLoginCredentials(request.body)) {
        console.log(true);
        registerUser(request.body)
            .then(userId =>{ 
               
                addUserAddress(userId, request.body)
                    .then(success => {
                
                        response.status(200).json({ message: "Successfully added new user"});
                    })
                    .catch(error => {
                        console.log(error);
                        response.status(400).json(error)});
            })
            .catch(error => {console.log(error),response.status(400).json(error)})
        
    }
    else {
      response.status(400).json(false);
    }
    

});











module.exports = router;