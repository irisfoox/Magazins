const mongoose = require('mongoose');

const Magazin = require('../models/magazin')
const Category = require('../models/category')
const Pic = require('../models/pic')


const createPic = async (req, res) => {
    try {
        const magazin = await Magazin.findById(req.params.magazinId);
        const category = await Category.findById(req.body.categoryId);
        const pic = await new Pic({
            title: req.body.title,
            subheader: req.body.subheader,
            longtext: req.body.longtext,
            pic: req.body.pic,
            magazinId: magazin._id,
            category: category
        })
        await pic.save()
        await magazin.mainPic.push(pic);
        await category.picId.push(pic._id);
        magazin.save();
        category.save();
        res.status(200).json({ massege: "ResponseOk", pic: pic });

    }
    catch (err) {
        res.status(400).json({ massege: "ResponseNotOk", err: err })
    }
}


//לשנות ל- promise all////////////////////////////////////

const createPicList = (req, res) => {
    let errProblems = [];
    const magazin = Magazin.findById(req.params.magazinId).then(() => {
        req.body.pics.map(pic => {
            const category = Category.findById(req.body.categoryId);
            const newPic = new Pic({
                title: req.body.title,
                subheader: req.body.subheader,
                longtext: req.body.longtext,
                pic: req.body.pic,
                magazinId: magazin._id,
                category: category
            });
            newPic.save().then(() => {
                magazin.mainPic.push(newPic).then(() => {
                    magazin.save();
                });
                category.picId.push(newPic._id).then(() => {
                    category.save();
                })
            })
                .catch(err => {
                    const picProblem = {
                        pic: newPic,
                        err: err
                    };
                    errProblems.push(picProblem);
                })

            res.status(200).json({ massege: "ResponseOk", errProblems: errProblems });
        });
    }).catch(err => {
        res.status(404).json({ err: err })
    })

}
module.exports = { createPic, createPicList }
