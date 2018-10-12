const express = require("express");
const knex = require("../knex");


module.exports = {
    addUserAddress: (id, credentials) => {

        console.log("inside address");
        console.log(parseInt(id));
        console.log(credentials.address);
        console.log(credentials.state);
        console.log(credentials.zipcode);
        console.log("inside address")

        return knex("address")
            .insert({
                street: credentials.address,
                city: credentials.city,
                state: credentials.state,
                zipcode: credentials.zipcode,
                userId: parseInt(id)
            })
            .then(results => {
                
                return true;
            })
            .catch(error => {
                console.log(error);
                return error;
            })
    }
}