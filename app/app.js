const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const axios = require('axios');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('hero');
});

app.get('/cms', (req, res) => {
    res.render('cms');
});

app.get('/:company_id', (req, res) => {
    const companyId = req.params.company_id;
    axios({
        url: "http://localhost:5000/companies/" + companyId,
        method: "get"
    })
    .then(response => {
        console.log(response.data);
        res.render('hero', data=response.data);
    })
    .catch(error => {
        console.log(error);
    });
});

app.listen(3000, () => {
    console.log("App is running in port 3000");
});