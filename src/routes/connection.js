const { Router } = require('express');
const router = Router();

const { expose } = require('../controllers/connection.controllers');

router.route('/')
    .post(expose);

module.exports = router;