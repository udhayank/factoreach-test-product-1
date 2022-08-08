const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
    name: {type: String, required: true},
    domain: {type: String},
    email: {type: String},
    phone: {type: String},
    hero_caption: {type: String}
});

const Company = mongoose.model('company', companySchema)
module.exports = Company;