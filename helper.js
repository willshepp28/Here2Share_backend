const express = require("express"),
    crypto = require("crypto"),
    jwt = require("jsonwebtoken");






// Encrypts Password
    let encrypt = (password => {
       
        if(typeof password !== '') {
            return crypto.pbkdf2Sync(password.toString(), "salt", 10, 512, "sha512")
            .toString("base64");
        } else {
            return crypto.pbkdf2Sync(password, "salt", 10, 512, "sha512")
            .toString("base64");
        }
    
    });









// Helps verify token
function verifyToken(request, response, next) {

    
    if (!request.headers.authorization) {
        console.log("Because you have no request.headers.auth")
        return response.status(401).send('Unauthorized request');

    }

    let token = request.headers.authorization.split(' ')[1];


    if (token === "null") {
        console.log("Because req.headers/auth is null")
        return response.status(401).send("Unauthorized request");
    }

    let payload = jwt.verify(token, process.env.JWT_SECRET);

    if (!payload) {
        console.log("Because you have no payload")
        return response.status(401).send("Unauthorized request");
    }


    request.userId = payload.user[0].id;
   
    next();
}



module.exports = {encrypt, verifyToken};
