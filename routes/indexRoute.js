'use strict';

const express = require('express');
const router = express.Router();

const index_controller = require('../controller/homeController');

router.get('/', index_controller.index);
router.get('/edit', index_controller.edit);


module.exports = router;