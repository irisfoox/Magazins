const router=require('express').Router()
const post=require('../controller/post')

router.post('/createPost/:id',post.createPost)
router.post('/updatePost',post.updatePost)
router.get('/getMagazinPosts',post.getMagazinPosts)
router.post('/getMagazinPost',post.getMagazinPost)

module.exports={router}
