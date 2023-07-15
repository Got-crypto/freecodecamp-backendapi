let express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.send("Hello express")
})





 module.exports = app;
