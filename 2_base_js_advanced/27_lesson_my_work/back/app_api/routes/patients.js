const express = require('express')
const router = express.Router()
const ctrPatients = require('../controllers/patients')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({extended: false})

router.get('/', ctrPatients.getPatients)
router.get('/:patientid', ctrPatients.getPatintById)
router.post('/', urlencodedParser, ctrPatients.addPatient)
router.put('/', urlencodedParser, ctrPatients.updatePatient)
router.delete('/:patientid', ctrPatients.deletePatient)

module.exports = router