const User = require('../models/user');
const Usersale = require('../models/usersale');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');


module.exports = {
    login(req, res) {
        const email = req.body.email;
        const password = req.body.password;
        User.findByEmail(email, async (err, myUser) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Error al consultar el usuario',
                    error: err
                });
            }
            if (!myUser) { //Cliente sin autorización para realizar la
                req
                return res.status(401).json({
                    success: false,
                    message: 'El email no existe en la base de datos'
                });
            }
            const isPasswordValid = await bcrypt.compare(password,
                myUser.password);
            if (isPasswordValid) {
                const token = jwt.sign({
                    id: myUser.id, email: myUser.email
                }, keys.secretOrKey, {});
                const data = {
                    id: myUser.id,
                    email: myUser.email,
                    name: myUser.name,
                    lastname: myUser.lastname,
                    image: myUser.image,
                    phone: myUser.phone,
                    session_token: `JWT ${token}`
                }
                return res.status(201).json({
                    success: true,
                    message: 'Usuario autenticado ',
                    data: data
                });
            }
            else {
                return res.status(401).json({
                    success: false,
                    message: 'Contraseña incorrecta'
                });
            }
        });
    },
    register(req, res) {
        const user = req.body;
        User.create(user, (err, data) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Error al crear el usuario',
                    error: err
                });
            }
            return res.status(201).json({
                success: true,
                message: 'Usuario creado ',
                data: data //Id del nuevo usuario
            });
        });
    },


    registersale(req, res) { // Cambia el nombre de la función a registersale
        const newUserSale = req.body;
        Usersale.create(newUserSale, (err, data) => { // Usa Usersale en lugar de User
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Error al crear el usuario de venta',
                    error: err
                });
            }
            return res.status(201).json({
                success: true,
                message: 'Usuario de venta creado',
                data: data
            });
        });
    },



    select(req, res) {
        const user = req.body;
        User.select(user, (err, data) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Error consultar venta',
                    error: err
                });
            }
            return res.status(201).json({
                success: true,
                message: 'consulta de la venta por el mes buena',
                data: data

            });
        });
    }
}


