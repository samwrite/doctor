const mongoose = require('mongoose');
const User = mongoose.model('User');
mongoose.Promise = global.Promise;


module.exports = {

    register: function(req, res) {
        var register = User(req.body);
        register.save(function(err){
            console.log(err)
            res.json(err)
        })
    },
}