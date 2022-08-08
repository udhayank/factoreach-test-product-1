const Company = require('../models/company');

exports.getAll = async (req, res) => {
    try {
        const companies = await Company.find({});
        return res.json({companies});
    }
    catch (error) {
        return res.json(error);
    }
}

exports.getById = async (req, res) => {
    try {
        const companyId = req.params.id;
        const company = await Company.findById(companyId);
        return res.json(company);
    }
    catch (error) {
        return res.json(error);
    }
}

exports.addCompany = async (req, res) => {
    try {        
        let newcompany = await new Company({
            name: req.body.name,
            domain: req.body.domain,
            email: req.body.email,
            phone: req.body.phone,
            hero_caption: req.body.hero_caption
        });
        await newcompany.save();        
        return res.json(newcompany);
    } catch (error) {
        return res.json(error);
    }
}

exports.deleteCompany = async (req, res) => {
    try {
        const companyId = req.params.id;
        await Company.deleteOne({_id: companyId});
        res.json({message: "Successfully deleted."});
    } catch (error) {
        res.json(error);
    }
}