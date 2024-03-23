const usersController = require('../controllers/usersController');

module.exports = (app) => {
    app.post('/api/users/create', usersController.register);
    app.post('/api/users/createsale', usersController.registersale);
    app.post('/api/users/login', usersController.login);
    app.get('/api/users/select/:mes', usersController.select); // Modificado para aceptar el parámetro de mes
    app.get('/api/users/selectdia/:dia', usersController.selectdia); // Modificado para aceptar el parámetro de mes

}

