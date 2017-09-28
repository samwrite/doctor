const path = require('path');
const appointments = require('../controllers/appointment_controller.js');
const users = require('../controllers/user_controller.js');

module.exports = (app) => {
    app.get('/appointments', appointments.all);
    app.post('/appointment', appointments.add);
    app.post('/appointment/destroy', appointments.destroy);
    app.post('/register', users.register);

    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve('./public/dist/index.html'));
    })
}