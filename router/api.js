const router=require('express').Router()
const post=require('../controller/post')
const category=require('../controller/category')

router.post('/createPost/:id',post.createPost)
router.post('/updatePost',post.updatePost)
router.get('/getMagazinPosts',post.getMagazinPosts)
router.post('/getMagazinPost',post.getMagazinPost)
router.post('/createCategory',category.createCategory)

module.exports=router
