const knex = require("../knex"),
    {
        encrypt
    } = require("../../helper"),
    jwt = require("jsonwebtoken");

// .createTable("users", (table) => {
//     table.increments();
//     table.string("username").notNullable();
//     table.string("profilePic").notNullable().defaultTo("https://s3.us-east-2.amazonaws.com/ig-clone2019/profilePic/profileplaceholder.png");
//     table.string("email").notNullable();
//     table.text("password").notNullable();
//     table.text("phone_number").notNullable();
//     table.timestamp('date_joined').defaultTo(knex.fn.now());


module.exports = {

    // checks to see if user has correct info
    checkLoginCredentials: (credentials) => {

        if (credentials.username &&
            credentials.email &&
            credentials.password &&
            credentials.phone_number) {
                console.log(true)
            return true
        }
        else {
            console.log(false)
            return false;
        }
    },
    // authenitcates user
    validateLoginCredentials: (credentials) => {


        return knex("users")
            .where({
                username: credentials.username,
                password: credentials.password,
            })
            .then(user => {

                console.log(user);
                console.log(user === 0);


                // checks to see if there is a user
                if (user == false) {
                    console.log('no users')
                    // response.status(401).send("No user")
                } else {
                    return token = jwt.sign({ user }, process.env.JWT_SECRET)
                }

            })
    },
    registerUser: function (credentials) {
       
        return knex("users")
            .insert({
                username: credentials.username,
                email: credentials.email,
                password: encrypt(credentials.password),
                phone_number: credentials.phone_number
            })
            .returning("id")
            .then(id => {
                return id;
            })
            .catch(error => {
                return false;
            })
    }
}