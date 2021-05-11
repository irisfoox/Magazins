const express = require('express')
const app = express();
const router = require('./route/api');
app.listen(8080, () => {
    console.log('listening 8080 ')
}
);
// app.use('/',route)
