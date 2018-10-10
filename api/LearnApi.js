const router = require("express").Router(),
    knex = require("../db/knex");




    router.post("/learn", (request, response) => {

        console.log(moment());
        console.log(moment().format('YYYY-MM-DD'));
        let startDate =  moment(request.body.start_date).format('YYYY-MM-DD');
        let returnDate = moment(request.body.return_date).format('YYYY-MM-DD')
    
        console.log(`Start date: ${startDate}`)
        console.log(`Return date:  ${returnDate}`)
    
        knex("learning")
            .insert({
                start_date: startDate,
                return_date: returnDate
            })
            .returning("*")
            .then(learn => response.json(learn))
            .catch(error => { console.log(error), response.json(error)})
    })
    
    
    
    router.get("/learn", (request, response) => {
        knex("learning")
            .then(learn => {
                learn.forEach(i => {
                    i.start_date = moment(i.start_date).format('YYYY-MM-DD'),
                    i.return_date = moment(i.return_date).format('YYYY-MM-DD')
                })
    
                console.log(learn)
                response.json(learn);
            })
            .catch(error => {console.log(error), response.json(error)})
    })






    router.post("/orders", (request, response) => {

        console.log(request.body);
    
        console.log(moment());
        console.log(moment().format('YYYY-MM-DD'));
        let startDate =  moment(request.body.start_date).format('YYYY-MM-DD');
        let returnDate = moment(request.body.return_date).format('YYYY-MM-DD')
    
        console.log(`Start date: ${startDate}`)
        console.log(`Return date:  ${returnDate}`)
        console.log(`Customer Id: ${request.body.customerId}`);
        console.log(`Product Id: ${request.body.productId}`)
        console.log(`Total Price: ${request.body.total_price}`)
        knex("orders")
            .insert({
                customerId: parseInt(request.body.customerId),
                productId: parseInt(request.body.productId),
                start_date: startDate,
                return_date: returnDate,
                total_price: parseInt(request.body.total_price)
            })
            .returning("*")
            .then(order => { 
                response.json(order)})
            .catch(error => {console.log(error), response.json(error)});
    });
    
    
    router.get("/order", (request, response) => {
    
        // console.log(encrypt("111"));
        // console.log(encrypt(encrypt("111")))
    
        knex("orders")
            .then(orders => { 
                orders.forEach(i => {
                    i.start_date = moment(i.start_date).format('YYYY-MM-DD'),
                    i.return_date = moment(i.return_date).format('YYYY-MM-DD')
                })
                response.json(orders)})
            .catch(error => { console.log(error), response.json(error)})
    })
    


module.exports = router;