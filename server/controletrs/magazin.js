
const User = require('../models/user')
const Magazin = require('../models/magazin')
const Category = require('../models/category')
const Pic = require('../models/pic')


// createMagazin
// getUserMagazins
// getUserMagazin

const mapPicF = async (pic) => {
    const mongooseCategory = new Category({
        name: category.name,
        color: category.color,
        magazinId: magazin._id
    });
    await mongooseCategory.save()
    categories.push(mongooseCategory)
    magazin.categories.push(mongooseCategory)
}

const createMagazin = async (req, res) => {

    try {
        const user = await User.findById(req.params.id)
        console.log(user);

        const magazin = new Magazin({
            title: req.body.title,
            userId: user._id
        });

        let categories = [];
        req.body.categories.map(mapPicF(category))


        await magazin.save();
        await user.magazinId.push(magazin._id);
        user.save();
        res.status(200).json({ massege: "ResponseOk", magazin: magazin });
    }

    catch (err) {
        console.log(err)
        res.status(400).json({ massege: "ResponseNotOk", err: err });

    }

}

// מחזיר NUL
// לבדוק
const getUserMagazins = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId).populate({ path: 'magazins' });
        console.log(user);
        res.status(201).json({ massege: "responseOk", magazins: user.magazins })
    }
    catch (err) {
        res.status(404).json({ massege: "responseNotOk", err: err });

    }
}


const getUserMagazin = async (req, res) => {
    console.log(req.params.id)
    try {
        const user = await User.findById(req.params.userId).
            populate({ path: 'magazins', match: { _id: req.body.magazinId } });
        console.log(user.magazins);
        res.status(200).json({ magazin: user.magazins })
    } catch (error) {
        console.log(error);
        res.status(400).send('error')
    }
}

module.exports = { createMagazin, getUserMagazins, getUserMagazin }