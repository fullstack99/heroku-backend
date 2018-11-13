const _ = require('lodash');

const Appointment = require('../models/appointment');

module.exports = {
    create(req, res) {
        const appointment = new Appointment(req.body);
        appointment.save(function (err, result) {
            if (err) {
                return res.status(500).send({ error: err });
            } else {
                res.status(200).send({ data: result });
            }
        })
    },

    update(req, res) {
        console.log(req.body);
        Appointment.findById(req.body.id, function (err, appointment) {
            if (err) {
                return res.status(500).send({ error: err });
            }
            if (appointment) {
                appointment.status = req.body.status
                appointment.save(function (err, result) {
                    if (err) {
                        res.status(500).send({ error: err });
                    } else {
                        res.status(200).send({ data: result });
                    }
                })

            } else {
                res.status(404).send({ error: 'Not found' });
            }

        });
    },

    list(req, res) {
        Appointment.find(function (err, appointments) {
            if(err)
                return res.status(500).send({ error: err });

            res.status(200).send({ data: appointments });
        });
    },
}