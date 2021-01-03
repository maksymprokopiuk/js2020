// const mongoose = require('mongoose')
const Doctor = require('../models/doctor')
const sendJSONResponse = (res, status, content) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.status(status).json(content);
}
module.exports.getDoctors = function (req, res) {
    const filter = req.body.filter || {}
    Doctor.find(filter)
        .exec((err, doctors) => {
            if (err) {
                sendJSONResponse(res, 404,
                    { message: "Doctors not found" })
                return
            }
            if (doctors.length == 0) {
                sendJSONResponse(res, 404,
                    { message: "Doctors not found (empty)" })
                return
            }
            sendJSONResponse(res, 200, doctors)
        })
}
module.exports.getDoctorById = function (req, res) {
    if (req.params && req.params.doctorid) {
        Doctor
            .findById(req.params.doctorid, (err, item) => {
                if (err) {
                    sendJSONResponse(res, 404,
                        {
                            message: 'Doctor not found'
                        });
                    return
                }
                sendJSONResponse(res, 200, item)
            })
    }
}
module.exports.addDoctor = function (req, res) {
    if (!req.body || !req.body.name || !req.body.specialisation) {
        sendJSONResponse(res, 400, {
            message: "No data"
        })
        return
    }
    const newDoctor = new Doctor({
        name: req.body.name,
        specialisation: req.body.specialisation,
    })
    newDoctor.save((err) => {
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
module.exports.updateDoctor = function (req, res) {
    if (req.body.doctorid) {
        // Знаходимо і оновлюємо
        Doctor.findByIdAndUpdate(req.body.doctorid,
            {
                name: req.body.name,
                specialisation: req.body.specialisation,
            },
            (err, doctor) => {
                if (err) {
                    sendJSONResponse(res, 404,
                        {
                            message: 'Doctor not found'
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
module.exports.deleteDoctor = function (req, res) {
    if (req.params.doctorid) {
        Doctor.findByIdAndDelete(req.params.doctorid, (err) => {
            if (err) {
                sendJSONResponse(res, 500, {
                    message: "can't delete"
                })
                return
            }
            sendJSONResponse(res, 204, {
                message: "deleted"
            })
        })
    } else
        sendJSONResponse(res, 400, {
            message: 'bad request'
        })
}