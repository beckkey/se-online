let User = require('../model/user')
let Push = require('../model/push-token')
let mongoose = require('mongoose')


function getMe(req, res) {
        res.json(req.user)
}

function getAll(req, res) {
    User.find().then(users => 
        {
            if (!users)
                res.status(500).send('Users not found')
            else
                res.send(users)
        })
}

function getByLogin(req, res) {
    User.findOne({login: req.params.login}).then(user => 
        {
            if (!user)
                res.status(500).send('User not found')
            else
                res.send(user)
        })
}

function addUser(req, res) {
    User.findOne({login: req.body.login})
        .then(user => {
            if (user) {
                console.log('User already exists')
                res.status(500).send('User already exists')
            }
            else {
                let newUser = new User()
                
                Object.assign(newUser, req.body)
                newUser.save((err, savedUser) => {
                    if (err) {
                        console.log(err, 'error while saving new user')
                        res.status(500).send()
                    }
                    console.log('new user successfully saved', savedUser)
                    res.send(savedUser._id)
                    res.status(200).send()
                })
            }
        })	
}

function deleteById(req, res) {
    const ObjectId = mongoose.Types.ObjectId
    User.remove({_id: new ObjectId(req.params.userId)})
        .then(() => {
            res.status(200).send('User successfully deleted')
        })
        .catch(err => {
            console.log('error while deleting user: ', err)
        })
}

function updateById(req, res) {
    const ObjectId = mongoose.Types.ObjectId
    User.update({_id: ObjectId(req.params.userId)}, req.body)
        .then(() => {
            res.status(200).send('User data successfully updated')
        })
        .catch(err => {
            console.log('error while updating user: ', err)
        })
}

function addPushToken(req, res) {
    let newPush = new Push()

    Object.assign(newPush, req.body)

    newPush.save((err, savedPush) => {
        if (err) {
            console.log(err, 'error while saving new push token')
            return res.status(500).send()
        }
        console.log('push added')
    })	
}

module.exports = { getMe, getAll, getByLogin, addUser, deleteById, updateById, addPushToken}
