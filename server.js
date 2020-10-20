
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/CRUD-project'));
// app.use("/static", express.static('./static/'));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname +
        '/dist/CRUD-project/index.html'));
});
app.listen(process.env.PORT || 8080);