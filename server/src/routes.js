const express = require('express');
const people = require('../people');
const routes = express.Router();


routes.get("/", async (req, res) => {
    return await res.json(people);
});

routes.post("/", async (req, res) => {
    const data = await req.body;

    console.log(data);
    allData = people.concat(data)
    return res.json(allData);
})

module.exports = routes;