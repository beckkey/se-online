let admin = require('firebase-admin')

let serviceAccount = require('../serviceAccountKey.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://evacall-73741.firebaseio.com"
});

module.exports = admin