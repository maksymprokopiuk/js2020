// const mongoose = require('mongoose')
const Schedule = require('../models/schedule')
const sendJSONResponse = (res, status, content) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.status(status).json(content);
}
module.exports.getSchedule = function (req, res) {
    const filter = req.body.filter || {}
    Schedule.find(filter)
        .exec((err, schedules) => {
            if (err) {
                sendJSONResponse(res, 404,
                    { message: "Schedule not found" })
                return
            }
            if (schedules.length == 0) {
                sendJSONResponse(res, 404,
                    { message: "Schedule not found (empty)" })
                return
            }
            sendJSONResponse(res, 200, schedules)
        })
}
module.exports.getScheduleById = function (req, res) {
    if (req.params && req.params.scheduleid) {
        Schedule
            .findById(req.params.scheduleid, (err, item) => {
                if (err) {
                    sendJSONResponse(res, 404,
                        {
                            message: 'Schedule not found'
                        });
                    return
                }
                sendJSONResponse(res, 200, item)
            })
    }
}
module.exports.addSchedule = function (req, res) {
    if (!req.body || !req.body.date || !req.body.doctorid || !req.body.patientid) {
        sendJSONResponse(res, 400, {
            message: "No data"
        })
        return
    }
    const newSchedule = new Schedule({
        date: req.body.date,
        doctorid: req.body.doctorid,
        patientid: req.body.patientid,
    })
    newSchedule.save((err) => {
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
module.exports.updateSchedule = function (req, res) {
    if (req.body.scheduleid) {
        // Знаходимо і оновлюємо
        Schedule.findByIdAndUpdate(req.body.scheduleid,
            {
                date: req.body.date,
                doctorid: req.body.doctorid,
                patientid: req.body.patientid,
            },
            (err, schedule) => {
                if (err) {
                    sendJSONResponse(res, 404,
                        {
                            message: 'Schedule not found'
                        });
                    return
                }
                sendJSONResponse(res, 200, {
                    message: 'Changed'
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
            message: 'Bad request'
        })
    }
}
module.exports.deleteSchedule = function (req, res) {
    if (req.params.scheduleid) {
        Schedule.findByIdAndDelete(req.params.scheduleid, (err) => {
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