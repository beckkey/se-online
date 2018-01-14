let mongoose = require('mongoose')
let bcrypt = require('bcrypt')
let Schema = mongoose.Schema

let SALT_WORK_FACTOR = 10

let user = new Schema({
	fname: String,
	mname: String,
	lname: String,
	phone: String,
	info: String,
	group: String,
	login: String,
	password: String,
	rights: String,
	city: String,
})

user.pre('save', function(next) {

	let usr = this

	if (!usr.isModified('password')) return next();

	bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
		if (err) return next(err);

		bcrypt.hash(usr.password, salt, function(err, hash) {
			if (err) return next(err);

			usr.password = hash;
			next();
		});
	});

});

user.methods.comparePassword = function(candidatePassword, cb) {
	//console.log(candidatePassword, this.password)
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', user)
