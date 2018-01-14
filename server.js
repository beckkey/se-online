let express = require('express')
require('dotenv').config()

let mongoose = require('mongoose')
let bodyParser = require('body-parser')

let db = mongoose.connect('mongodb://localhost/evacall1')
let history = require('connect-history-api-fallback');
let router = require('./router')

let server = express()
server.use(bodyParser.json())

server.use(router)
if (process.env.UI_PATH !== null) {
    const staticFileMiddleware = express.static(process.env.UI_PATH)
    server.use(staticFileMiddleware)
    server.use(history({
        verbose: true,
    }));
    server.use(staticFileMiddleware)
}
server.listen(3004, function() {
	console.log('Server is running on 3004...')
})
