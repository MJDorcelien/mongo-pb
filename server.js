const express = require('express');
const app = express();
const port = 3000;
const budget = require('./budget.json');

const mongoose = require("mongoose")
const chartModel = require("./chart_schema")

let url = 'mongodb://127.0.0.1:27017/mongodb_assignment';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log("Connected to the database")
        })
        .catch((connectionError) => {
            console.log(connectionError)
        })

app.use('/', express.static('public'));

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.get('/credit', (req, res) => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            chartModel.find().exec().then(data => {
                console.log(data);
                mongoose.connection.close();
                console.log("Connection Closed");
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

// app.get('/credit', (req, res) => {
    
//     chartModel.find({})
//     .then((data) => {
//         console.log(data)
//         mongoose.connection.close()
//     })
//     .catch((connectionError) => {
//         console.log(connectionError)
//     })

//     res.send(
//         console.log("in credit")
//     )
// });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
