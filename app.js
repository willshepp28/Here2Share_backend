const express = require("express"),
    bodyParser = require("body-parser"),
    morgan = require("morgan"),
    dotenv = require("dotenv"),
    compression = require("compression"),
    cors = require("cors"),
    Api = require("./api/Api"),
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
application.use("/api/v1", Api);





application.listen(port, () => {
    console.log(`Port listening on port ${port}`);
});