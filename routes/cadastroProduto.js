var express = require('express');
var { diskStorage } = require('multer');
var router = express.Router();
var multer = require('multer');
var path = require('path');
var cadastroController = require('../controllers/cadastroController');

const multerDiskStorage = multer.diskStorage({
  destination: (req,file,callback)=>{
     const folder = path.join(__dirname,'../public/profile');
     callback(null, folder);
  },
  filename: (req,file,callback)=>{
    const imageName = Date.now + file.originalname;
    callback(null, imageName);
  }
});

const upload = multer({storage:diskStorage});

router.get('/', cadastroController.view);
router.post('/cadastro', upload.single('avatar'), cadastroController.salvarCadastro);

module.exports = router;