const { Router } = require('express');

const issues = require('../controllers/issues');

const router = Router();

router.post('/', issues.post);

router.get('/', issues.get);

router.put('/', issues.put);

router.delete('/', issues.delete);


module.exports = router;