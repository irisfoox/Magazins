const User = require('../controletrs/user');
// const Post = require('../controletrs/post');
const Pic = require('../controletrs/pic');
const Magazin = require('../controletrs/magazin');
const router=require('express').Router()
const post=require('../controletrs/post')
const category=require('../controletrs/category')


router.post('/login', User.login);
router.post('/register', User.register);
router.post('/createMagazin/:id', Magazin.createMagazin);
router.post('/createPost/:id',post.createPost)
router.post('/updatePost',post.updatePost)
router.get('/getMagazinPosts',post.getMagazinPosts)
router.post('/getMagazinPost',post.getMagazinPost)
router.post('/createCategory',category.createCategory)
// router.post('/register', User.register);

module.exports = router     