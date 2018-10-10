/*
 |--------------------------------------------------------------------------
 | Require Dependencies
 |--------------------------------------------------------------------------
 */
const express = require("express"),
    bodyParser = require("body-parser"),
    morgan = require("morgan"),
    dotenv = require("dotenv"),
    compression = require("compression"),
    cors = require("cors"),
    Api = require("./api/Api"),
    AuthApi = require("./api/AuthApi"),
    ProductApi = require("./api/ProductApi"),
    CategoryApi = require("./api/CategoryApi"),
    OrderApi = require("./api/OrderApi"),
    port = process.env.PORT || 3000;




application = express();


/*
|--------------------------------------------------------------------------
|  Middleware
|--------------------------------------------------------------------------
*/

// install it like expressJS middleware
application.use(compression());

application.use(morgan('dev'));
// application.use(morgan('combined'))

// parse application/json
application.use(bodyParser.json());
// parse application/x-www-form-urlencoded
application.use(bodyParser.urlencoded({ extended: false }));


application.use(cors())

require('dotenv').config();




/*
|--------------------------------------------------------------------------
| Api
|--------------------------------------------------------------------------
*/
application.use("/ap/v1/order", OrderApi);
application.use("/api/v1/auth", AuthApi);
application.use("/api/v1/product", ProductApi);
application.use("/api/v1/category", CategoryApi);
// application.use("/ap/v1/order", OrderApi);


application.use("/api/v1", Api);






module.exports = application.listen(port, () => {
    console.log(`Port listening on port ${port}`);
});