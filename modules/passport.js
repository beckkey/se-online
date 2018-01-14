let passport = require('passport')
, LocalStrategy = require('passport-local').Strategy

let User = require('../model/user')

passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({login : username}).then( function (user, err) {
        if (err) { console.log('error');return done(err); }
        if (!user) {
            console.log('incorrect login');
            return done(null, false, { message: 'Incorrect login.' });
        }
        user.comparePassword(password, function(err, isMatch) {
            if (err) throw err;
            if (isMatch)
                {
                        return done(null, user);
                } 
                else 
                {
                    console.log('incorrect password')
                    return done(null, false, { message: 'Incorrect password.' })
                }
        })
        })
    }
))

passport.serializeUser(function(user, cb) {
    cb(null, user.id);
})

passport.deserializeUser(function(id, cb) {
    User.findById(id).then(function (user) {
    cb(null, user);
    })
})


module.exports = passport