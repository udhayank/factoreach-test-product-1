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

exports.updateCompany = async (req,res) => {
    try {
        console.log("updating company");
        const companyId = req.body.company_id;
        let company = await Company.findByIdAndUpdate(companyId, {
            name: req.body.name == "" ? undefined : req.body.name,
            domain: req.body.domain == "" ? undefined : req.body.domain,
            email: req.body.email == "" ? undefined : req.body.email,
            phone: req.body.phone == "" ? undefined : req.body.phone,
            hero_caption: req.body.hero_caption == "" ? undefined : req.body.hero_caption
        }, {new: true});
        console.log(req.body.domain);
        await company.save();
        res.json({message: "Updated successfully!", company: company});
    } catch (error) {
        res.json(error);
    }
}