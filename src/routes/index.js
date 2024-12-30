const router = require('./biblia.route');
const cors = require('cors');
const bodyParser = require('body-parser'); 

module.exports	= (app) => {
    app.use(
        cors({
            origin: '*',
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            allowedHeaders: ['Content-Type', 'Authorization'],
        }),
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        router
    )
}