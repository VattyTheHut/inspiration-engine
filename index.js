const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var port = 4000;
var app = express();

app.use(express.static(__dirname + '/public'))
app.use(express.static('assets'))
app.use(cors())
app.use(bodyParser.json())


app.listen(port, () => {
    console.log("listening on port " + port)
})