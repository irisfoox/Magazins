const LoginController = require('../controllers/login')

const router = require('express').Router();

router.post('/login', LoginController.login);
router.post('/register', LoginController.register);


module.exports = router     