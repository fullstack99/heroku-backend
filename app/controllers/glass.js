const _ = require('lodash');

const Glass = require('../models/glass');

module.exports = {
    create(req, res) {
        const glass = new Glass(req.body);
        glass.save(function (err, result) {
            if (err) {
                return res.status(500).send({ error: err });
            } else {
                res.status(200).send({ data: result });
            }
        })
    },
}