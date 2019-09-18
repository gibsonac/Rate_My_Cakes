const express = require('express');

//pulls in mongoose.js which connects to our database and also links all of our models
require('./server/config/mongoose.js');
const path = require('path')
const parser = require('body-parser')


const app = express();
// app.use(flash());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(__dirname + "/client/static"));

app.use(parser.json())
    .use(parser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public/dist/public'));



require('./server/config/routes.js')(app);

app.listen(8001, function () {
    console.log("listening on port 8001 for rate my cake!!")
});
