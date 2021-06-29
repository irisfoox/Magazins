const Post = require('../models/post')
const Category = require('../models/category')
const Magazin = require('../models/magazin')

const createPost = async (req, res) => {
    try {
        const magazinId = await Magazin.findById(req.params.id)

        const newPost = new Post({
            title: req.body.title,
            subheader: req.body.subheader,
            longtext: req.body.longtext,
            pic: req.body.pic,
            category: req.body.category,
            magazinId: magazinId._id
        })

        await newPost.save()
    }
    catch (err) {
        res.json({ err: err })
    }

}


const updatePost = (req, res) => {
    try {
        Post.findByIdAndUpdate({ '_id': req.params.id }, {
            title: req.body.title,
            subheader: req.body.subheader,
            longtext: req.body.longtext,
            pic: req.body.pic,
            category: req.body.category,
            magazinId: req.body.magazinId
        }
            //אם רוצים לראות את הפוסט החדש
            // , { new: true }).then((post)=>{

            // }).catch(err=>{

            // })
        )
    }
    catch (err) {
        res.json({ err: err })
    }
}

const getMagazinPosts = (req, res) => {

    const magazinPosts = Magazin.findById(req.params.id).populate('posts')
        .then(data => {
            res.json({ magazinPosts: data })
        })
        .catch(err => { res.json({ err: err }) })
}

const getMagazinPost = (req, res) => {

    const magazin = Magazin.findById(req.params.id).populate({ path: 'posts', match: { _id: req.body.postId } })
        .then(data => {
            res.json({ magazinPosts: data })
        })
        .catch(err => { res.send(err) })
}

module.exports = { createPost, updatePost, getMagazinPosts, getMagazinPost }


