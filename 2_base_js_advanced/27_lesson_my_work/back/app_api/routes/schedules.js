const express = require('express')
const router = express.Router()
const ctrSchedules = require('../controllers/schedules')
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', ctrSchedules.getSchedule);
router.get('/:scheduleid', ctrSchedules.getScheduleById);
router.post('/', urlencodedParser, ctrSchedules.addSchedule);
router.put('/', urlencodedParser, ctrSchedules.updateSchedule);
router.delete('/', ctrSchedules.deleteSchedule);

module.exports = router