var express = require('express');
var router = express.Router();

var usuariosController = require('../controllers/usuariosController');


router.get('/', usuariosController.view);

module.exports = router;