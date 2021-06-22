
const Category=require('../models/category')

const createCategory = async (req, res) => {
    try {
        const magazinId = await Magazin.findById(req.params.id)

        const newCategory = new Category({
            name: req.body.name,
            color: req.body.color,
            magazinId: magazinId._id
        })

        await newCategory.save()
    }
    catch (err) {
        res.json({ err: err })
    }
}
// const createCategoryList= async (req, res) => {
//     try {
//         const magazinId = await Magazin.findById(req.params.id)

//         const newCategory = new Category({
//             name: req.body.name,
//             color: req.body.color,
//             magazinId: magazinId._id
//         })

//         await newCategory.save()
//     }
//     catch (err) {
//         res.json({ err: err })
//     }

// }
// module.exports = { createCategory ,createCategoryList}
module.exports = { createCategory ,createCategoryList}
