const router =  require('express').Router();


require('../db/mongoConnection');

const portfolio = require('./portfolio');

router.get('/', (req, res) =>{
res.json({
    sucess : false,
    message : 'Please, do not call /api it is for our server'
});
});



router.use('/portfolio', portfolio);

module.exports = router;