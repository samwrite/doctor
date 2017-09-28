const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {type: String}},
    {timestamps:true})

mongoose.model('User', UserSchema);