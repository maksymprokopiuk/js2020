const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        disease: {type: String, required: true},
        // doctorid: {type: String}
    },
    { timestamps: true }
)

module.exports = mongoose.model('Patients', patientSchema)