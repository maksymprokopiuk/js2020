const Patient = require('../models/patient')
const sendJSONResponse = (res, status, content) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(status).json(content)
}
module.exports.getPatients = (req, res) => {
    const filter = req.body.filter || {}
    Patient.find(filter)
        .exec((err, patients) => {
            if (err) {
                sendJSONResponse(res, 404,
                    {message: 'Patients not found'})
                    return
            }
            if (patients.length === 0) {
                sendJSONResponse(res, 404,
                    {message: 'Patients not found (empty)'})
                    return
            }
            sendJSONResponse(res, 200, patients)
        })
}
module.exports.getPatintById = function (req, res) {
    if (req.params && req.params.patientid) {
        Patient.findById(req.params.patientid, (err, item) => {
                if (err) {
                    sendJSONResponse(res, 404,
                        {
                            message: 'Patient not found'
                        });
                    return
                }
                sendJSONResponse(res, 200, item)
            })
    }
}
module.exports.addPatient = function (req, res) {
    if (!req.body || !req.body.name || !req.body.disease) {
        sendJSONResponse(res, 400, {
            message: "No data"
        })
        return
    }
    const newPatient = new Patient({
        name: req.body.name,
        disease: req.body.disease,
        doctorid: req.body.doctorid
    })
    newPatient.save((err) => {
        if (err) {
            sendJSONResponse(res, 500, {
                message: err
            })
            return
        }
        sendJSONResponse(res, 200, {
            message: 'added'
        })
    })
}
module.exports.updatePatient = function (req, res) {
    if (req.body.patientid) {
        // Знаходимо і оновлюємо
        Patient.findByIdAndUpdate(req.body.patientid,
            {
                name: req.body.name,
                disease: req.body.disease,
                doctorid: req.body.doctorid,
            },
            (err, patient) => {
                if (err) {
                    sendJSONResponse(res, 404,
                        {
                            message: 'Patient not found'
                        });
                    return
                }
                sendJSONResponse(res, 200, {
                    message: 'changed'
                })
            }
        )
        // Або знаходимо, змінюємо і зберігаємо
        // Product
        // .findById(req.body.productid,(err,product)=>{ //Знаходимо
        // if(err){
        // sendJSONResponse(res,404,
        // {
        // message:'Product not found'
        // });
        // return
        // }
        // product.title=req.body.title, //Змінюємо
        // product.price=req.body.price,
        // product.count=req.body.count,
        // product.save((err)=>{ //Зберігаємо
        // if(err){
        // sendJSONResponse(res,500,
        // {
        // message:'Not changed'
        // });
        // return
        // }

        // sendJSONResponse(res,200,{
        // message:'changed'
        // })
        // })

        // })
    } else {
        sendJSONResponse(res, 400, {
            message: 'bad request'
        })
    }
}
module.exports.deletePatient = function (req, res) {
    if (req.params.patientid) {
        Patient.findByIdAndDelete(req.params.patientid, (err) => {
            if (err) {
                sendJSONResponse(res, 500, {
                    message: "Can't delete"
                })
                return
            }
            sendJSONResponse(res, 204, {
                message: "Deleted"
            })
        })
    } else
        sendJSONResponse(res, 400, {
            message: 'Bad request'
        })
}