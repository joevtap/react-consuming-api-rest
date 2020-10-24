const bodyParser = require("body-parser");
const express = require("express");
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'build')));

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(urlencodedParser);
app.use("/api", require("./src/routes"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);
