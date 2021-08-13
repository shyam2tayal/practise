var express = require('express')

const router = express.Router();


router.get('/giveme', function(req, res) {
    res.send("Inside router 1");
})


module.exports = router;