let User = require('../model/user')
let admin = require('../modules/firebase-admin')

function login(req, res) {
    User.findOne({login: req.body.username}).then(user => {
        console.log('User found: ', user._id)
        admin.auth().createCustomToken(user._id.toString())
            .then(customToken => {
                console.log("Custom token granted for user: ", user._id, user.name)
                res.send(user.rights)
            })
            .catch(function(error) {
                console.log('Error creating token: ', error)
            })
    })
}

function authenticate(req, res, next) {
    let idToken = req.body.idToken
	admin.auth().verifyIdToken(idToken)
		.then(function(decodedToken) {
            var uid = decodedToken.uid;
            next()
    		console.log('Authenticated with uid: ', uid)
        }).catch(function(error) {
            res.status(401).send('Unauthorized')
			console.log('Error while authenticating: ', error)
	    });
}

module.exports = { login, authenticate }