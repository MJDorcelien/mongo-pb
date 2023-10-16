const express = require('express');
const app = express();
const port = 3000;
const budget = require('./budget.json');

const mongoose = require("mongoose")
const creditModel = require("./credit_schema")
const budgetModel = require("./budget_schema")

let url = 'mongodb://127.0.0.1:27017/mongodb_assignment';

app.use('/', express.static('public'));

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            budgetModel.find({}).exec().then(data => {
                console.log("Connected to the database")
                console.log(data);
                res.json(data);
            })
            .catch(err => {
                console.log(err);
            });
        })
        .catch(connectionError => {
            console.log(connectionError);
        });
});

app.get('/credit', (req, res) => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            creditModel.find({}).exec().then(data => {
                console.log("Connected to the database")
                console.log(data);
                res.json(data);
            })
            .catch(err => {
                console.log(err);
            });
        })
        .catch(connectionError => {
            console.log(connectionError);
        });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
