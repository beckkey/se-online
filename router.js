let {Router} = require('express')
let mongoose = require('mongoose')
let fileUpload = require('express-fileupload')

let User = require('./model/user')

let passport = require('./modules/passport')
let login = require('./modules/login-functions').login
let auth = require('./modules/login-functions').authenticate
let users = require('./modules/user-functions')

const router = new Router()

router.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
router.use(passport.initialize());
router.use(passport.session());
router.use(fileUpload())


router.post('/api/login',
	passport.authenticate('local'),
	login
);

router.get('/api/me', users.getMe)

router.get('/api/users', users.getAll)

router.get('/api/users/:login', users.getByLogin)

router.post('/api/users', users.addUser)

router.delete('/api/users/:userId', users.deleteById)

router.put('/api/users/:userId', users.updateById)

router.post('/api/users/push-token', users.addPushToken)

module.exports = router
