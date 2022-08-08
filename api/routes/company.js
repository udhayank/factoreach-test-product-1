const express = require('express');
const router = express.Router();

const companyController = require('../controllers/company');

router.get('/', companyController.getAll);
// router.get('/', (req,res) => {
//     res.send("reached routes")
// });
router.get('/:id', companyController.getById);
router.post('/', companyController.addCompany);
router.delete('/:id', companyController.deleteCompany);

module.exports = router;