const mongoose = require('mongoose');
const Appointment = mongoose.model('Appointment');
mongoose.Promise = global.Promise;


module.exports = {
    add: (req, res, next) => {
        let q = new Appointment(req.body);
        q.save()
        .then(() => {
            res.json(true);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
    },
    all: (req, res, next) => {
        Appointment.find({})
        .then((appointment) => { res.json(appointment); })
        .catch((err) => { res.status(450).json(err); });
    },
    destroy: (req, res, next) => {
        let b = new Appointment(req.body);
        Appointment.remove(b)
        .then(() => { res.json(true); })
        .catch((err) => { res.status(504).json(err); })
    },
}