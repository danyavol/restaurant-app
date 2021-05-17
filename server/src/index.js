const express = require('express');
const router = express.Router();
module.exports = router;

router.use('/', require('./routes/config'));

router.use('/', require('./routes/orders'));