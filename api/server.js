const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.json());
app.use(methodOverride('_method'));

const mongoDBurl = "mongodb://localhost:27017/factoreach_test_prodrct_1_DB";
mongoose.connect(mongoDBurl, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(console.log("Connected to mongoDB"));

        
const companyRoutes = require('./routes/company');

app.use('/companies', companyRoutes);
// app.get('/', (req,res) => {
//     console.log("request received");
//     res.send("request received")
// });

app.listen(5000, () => {
    console.log("Server is listening on port 5000");
});