const { Router } = require('express');

const router = Router();

router.use('/issues', require('./issues'));

module.exports = router;