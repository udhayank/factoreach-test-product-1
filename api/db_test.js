const mongoose = require('mongoose');

const mongoDBurl = "mongodb://localhost:27017/factoreach_test_prodrct_1_DB";
mongoose.connect(mongoDBurl, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(console.log("Connected to mongoDB"));

const Company = require('./models/company');
// const companySchema = mongoose.Schema({
//     name: {type: String, required: true},
//     domain: {type: String},
//     email: {type: String},
//     phone: {type: String},
//     hero_caption: {type: String}
// });

// const Company = mongoose.model('company', companySchema);

// const newCompany = new Company({
//     name: "company 1",
//     domain: "company1.com",
//     email: "mail@company1.com",
//     phone: "9876987698",
//     hero_caption: "This is company 1 hero caption"
// });

// newCompany.save();

// console.log(newCompany);

const foundcompanies = Company.find({});
console.log(foundcompanies);