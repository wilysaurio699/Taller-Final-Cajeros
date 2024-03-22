const usersController = require('../controllers/usersController');


module.exports = (app) => {
    app.post('/api/users/create', usersController.register);
    app.post('/api/users/createsale', usersController.registersale);
    app.post('/api/users/login', usersController.login);
    app.get('/api/users/select', usersController.select);
}
