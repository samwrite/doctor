const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    date: {type: Date},
    time: {type: String},
    patient: {type: String},
    complain: {type: String}},
    {timestamps:true})

mongoose.model('Appointment', AppointmentSchema);