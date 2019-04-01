const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api')

router.use('/api', apiRoutes);
router.route('/')
        .get((req, res) => {
            res.json( {'msg': 'OK home OK'} )
        })

module.exports = router