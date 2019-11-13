const { Router } = require('express');
const router = Router();
const ROOT_DIR  = require('../rootDir.js');
var path = require('path');

router.route('/test')
    .get((req, res) => {
        res.render(path.join(ROOT_DIR + '/views/test.pug'));
    });

router.route('/')
    .get((req, res) => {
        res.render(path.join(ROOT_DIR + '/views/index.pug'));
    });


module.exports = router;
