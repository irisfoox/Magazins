const User = require('../controlers/user');
const Pic = require('../controlers/pic');
const Magazin = require('../controlers/magazin');

const router = require('express').Router();

router.post('/login', User.login);
router.post('/register', User.register);
router.post('/createMagazin/:id', Magazin.createMagazin);


module.exports = router;