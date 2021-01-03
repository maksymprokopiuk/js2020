const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema(
    {
        name: { type:String, required:true },
        specialisation: { type:String, required:true },
    },
    { timestamps:true }
);

module.exports = mongoose.model('Doctors', doctorSchema);