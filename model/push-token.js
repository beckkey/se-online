let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.Types.ObjectId

let Schema = mongoose.Schema

let push = ({
	token: String,
	rights: Boolean,
})

module.exports = mongoose.model('Push', push)