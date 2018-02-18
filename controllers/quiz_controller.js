const mongo = require('../mongo')

module.exports.landing = function(req, res, next){
    const user = mongo.read()

    user.then(x => {
        res.json({ data: x })
    })
    .catch(e => console.error(e))
};