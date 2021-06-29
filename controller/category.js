
const Category=require('../models/category')

//good
const createCategory = async (req, res) => {
    try {
        // const magazinId = await Magazin.findById(req.params.id)

        const newCategory = new Category({
            name: req.body.name,
            color: req.body.color,
            // magazinId: magazinId._id
        })

        await newCategory.save()
        res.status(200).json({"newCategory:":newCategory})
    }
    catch (err) {
        res.json({ err: err.message })
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
//         res.status.json({ err: err })
//     }

// }
module.exports = { createCategory}
    //  ,createCategoryList}
