const mongoose = require('mongoose');

const User = require('../models/user')
const bcrypt = require("bcrypt")




const register = (req, res) => {
    const { name, mail, password } = req.body;
    console.log("im at register!!")
    User.find({ mail }).then((users) => {
        console.log(users)
        if (users.length >= 1) {
            return res.status(409).json({
                message: 'responseNotOk'
            })
        }

        bcrypt.hash(password, 10, (error, hash) => {
            if (error) {
                return res.status(500).json({
                    error
                })
            }

            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                mail,
                name,
                password: hash
            })

            user.save().then((result) => {
                console.log(result);

                res.status(200).json({
                    message: 'responsetOk', user
                });
            }).catch(error => {
                res.status(500).json({
                    message: 'responsetNotOk',
                    error
                })
            });
        });
    })
}

const login = (req, res) => {
    const { name, password } = req.body;
    console.log("name:  ", name);
    console.log("password:  ", password);
    User.find({ name }).then((users) => {
        console.log(users);
        if (users.length === 0) {
            return res.status(401).json({
                message: 'responseNotOk'
            });
        }

        users.map((user) => {
            console.log("the got password", password)
            console.log("the got name", name)

            bcrypt.compare(password, user.password, (error, result) => {
                if (error) {
                    return res.status(401).json({
                        message: 'responseNotOk'
                    });
                }
                console.log("result:    ", result)
                if (result) {
                    return res.status(200).json({
                        message: 'responseOk',
                        user
                    })
                }

                res.status(401).json({
                    message: 'responseNotOk'
                });
            })
        })
    })
}

module.exports = { register, login }

