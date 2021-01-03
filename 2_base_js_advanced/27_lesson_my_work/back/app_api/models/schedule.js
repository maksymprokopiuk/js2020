const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema(
    {
        date: { type:String, required:true },
        doctorid: { type:String, required:true },
        patientid: { type:String, required:true },
    },
    { timestamps:true }
);

module.exports = mongoose.model('Schedules', scheduleSchema);