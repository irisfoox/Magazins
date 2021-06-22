const User = require('../controletrs/user');
// const Post = require('../controletrs/post');
const Pic = require('../controletrs/pic');
const Magazin = require('../controletrs/magazin');

const router = require('express').Router();

router.post('/login', User.login);
router.post('/register', User.register);
router.post('/createMagazin/:id', Magazin.createMagazin);
// router.post('/register', User.register);


module.exports = router     