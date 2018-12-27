const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const StoryService = require('./service/storyService');
const config = require('./config');

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/get-all', (req, res) => {
    const { page, limit } = req.query;
    StoryService.getAll({
        page: page || 0,
        limit: limit || config.limit,
    })
        .then(data => res.json(data))
        .catch(error => res.json({ error }));
});

app.get('/get-story', (req, res) => {
    const { id } = req.query;
    StoryService.getById(id)
        .then(data => res.json(data))
        .catch(error => res.json({ error }));
});

app.post('/create', (req, res) => {
    const { content } = req.body;
    StoryService.create({ content })
        .then(data => res.json(data))
        .catch(error => res.json({ error }));
});

app.post('/update', (req, res) => {
    const { _id, content } = req.body;
    StoryService.update({ _id, content })
        .then(data => res.json(data))
        .catch(error => res.json({ error }));
});

app.post('/del', (req, res) => {
    const { _id } = req.body;
    StoryService.del(_id)
        .then(data => res.json(data))
        .catch(error => res.json({ error }));
});

app.listen(port, () => {
    console.log('Applicattion listening on port: ', port);
})