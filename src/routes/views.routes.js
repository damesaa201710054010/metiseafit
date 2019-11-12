const { Router } = require('express');
const router = Router();
var path = require('path');

router.route('/test')
    .get((req, res) => {
        res.render(path.join('/home/youngermaster/AzureDevOps/METIS-AZURE/src/views/test.pug'));
    });

router.route('/')
    .get((req, res) => {
        res.render(path.join('/home/youngermaster/AzureDevOps/METIS-AZURE/src/views/index.pug'));
    });


module.exports = router;
