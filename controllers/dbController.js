const db = require('../models')

module.exports = {
    test: function(req, res){
        res.json( {'msg': 'OK sending JSON OK'} )
    }
}