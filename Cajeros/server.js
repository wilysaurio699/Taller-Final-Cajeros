const express = require('express');
const passport = require('passport');
const session = require('express-session'); // Importa express-session
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');

const usersRoutes = require('./routes/usersRoutes');
const port = process.env.PORT || 3000;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false })); // Configura express-session
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
app.disable('x-powered-by');
app.set('port', port);
usersRoutes(app);

//direccion ip V4 de la maquina, consultar con ipconfig
server.listen(3000, '192.168.42.181' || 'localhost', function () {
  console.log(
    'App Node.js ' +
    process.pid +
    ' ejecutando en ' +
    server.address().address +
    ':' +
    server.address().port
  );
});
/** RUTAS ***********************************************/
app.get('/', (req, res) => {
  res.send('Estas en la ruta raiz del backend.');
});
app.get('/test', (req, res) => {
  res.send('Estas en la ruta TEST');
});
//Manejo de errores ******************************************
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).send(err.stack);
});
//en package.json se cambio "passport": "^0.7.0", a "passport": "^0.4.1",
