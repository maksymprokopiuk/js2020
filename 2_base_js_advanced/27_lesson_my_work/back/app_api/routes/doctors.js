const express=require('express')
const router=express.Router()
const ctrDoctors=require('../controllers/doctors')
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});

router.get('/' , ctrDoctors.getDoctors);
router.get('/:doctorid', ctrDoctors.getDoctorById);
router.post('/', urlencodedParser, ctrDoctors.addDoctor);
router.put('/', urlencodedParser, ctrDoctors.updateDoctor);
router.delete('/:doctorid',ctrDoctors.deleteDoctor);

module.exports=router