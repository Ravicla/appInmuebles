const router = require('express').Router();

router.use('/inmuebles', require('./api/departamento'));

module.exports = router;