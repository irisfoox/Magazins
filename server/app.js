const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const router = require('./routes/api');



const ConectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}



dotenv.config();

mongoose.connect(process.env.MONGO_DB, ConectionParams)
    .then(() => {
        console.log("db parameter")
    }).catch((err) => {
        console.log("error: \n" + err);
    })
app.use(bodyParser.json())
app.use('/', router)


app.listen(8080, () => {
    console.log("listening 8080");
})
