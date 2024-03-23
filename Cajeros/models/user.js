const db = require('../config/config');
const bcrypt = require('bcryptjs');

const User = {};
const Usersale = {};

User.findById = (id, result) => {
    Usersale
    const sql = `SELECT id, Tipo_Documento, Numero_Documento, Nombres, Apellidos, password FROM cajeros WHERE id = ?`;
    db.query(sql, [id], (err, user) => {
        if (err) {
            console.log('Error al consultar: ', err);
            result(err, null);
        } else {
            console.log('Usuario consultado: ', user[0]);
            result(null, user[0]);
        }
    });
};

User.findByEmail = (Numero_Documento, result) => {
    const sql = `SELECT id, Tipo_Documento, Numero_Documento, Nombres, Apellidos, password FROM cajeros WHERE Numero_Documento = ?`;
    db.query(sql, [Numero_Documento], (err, user) => {
        if (err) {
            console.log('Error al consultar: ', err);
            result(err, null);
        } else {
            console.log('Usuario consultado: ', user[0]);
            result(null, user[0]);
        }
    });
};

User.select = (mes, result) => {
    const totalVentasQuery = `SELECT SUM(valor) AS total_ventas FROM ventas WHERE MONTH(fecha) = ?`;
    db.query(totalVentasQuery, [mes], (err, totalVentas) => {
        if (err) {
            console.log('Error al calcular la suma total de ventas: ', err);
            result(err, null);
        } else {
            const totalVentasValor = totalVentas[0].total_ventas || 0;
            const sql = `SELECT id, cliente, valor, fecha, cod_factura FROM ventas WHERE MONTH(fecha) = ?`;
            db.query(sql, [mes], (err, ventas) => {
                if (err) {
                    console.log('Error al consultar: ', err);
                    result(err, null);
                } else {
                    // Agregar la fila con la suma total de ventas al resultado
                    ventas.push({
                        total_ventas: totalVentasValor
                    });

                    console.log('Ventas del mes:', ventas);
                    result(null, ventas);
                }
            });
        }
    });
};


User.selectdia = (dia, result) => {
    const totalVentasQuery = `SELECT SUM(valor) AS total_ventas FROM ventas WHERE DATE(fecha) = ?`;
    db.query(totalVentasQuery, [dia], (err, totalVentas) => {
        if (err) {
            console.log('Error al calcular la suma total de ventas para el día:', err);
            result(err, null);
        } else {
            const totalVentasValor = totalVentas[0].total_ventas || 0;
            const sql = `SELECT id, cliente, valor, fecha, cod_factura FROM ventas WHERE DATE(fecha) = ?`;
            db.query(sql, [dia], (err, ventas) => {
                if (err) {
                    console.log('Error al consultar: ', err);
                    result(err, null);
                } else {
                    // Agregar la fila con la suma total de ventas al resultado
                    ventas.push({
                        total_ventas: totalVentasValor
                    });

                    console.log('Ventas del día:', ventas);
                    result(null, ventas);
                }
            });
        }
    });
};


User.create = async (user, result) => {
    try {
        // Generar un hash seguro de la contraseña
        const hashedPassword = await bcrypt.hash(user.password, 10);

        // Consulta SQL para insertar el usuario en la base de datos
        const sql = `INSERT INTO cajeros (Tipo_Documento, Numero_Documento, Nombres, Apellidos, password)
                     VALUES (?, ?, ?, ?, ?)`;

        // Ejecutar la consulta SQL con el hash seguro de la contraseña
        db.query(
            sql,
            [
                user.Tipo_Documento,
                user.Numero_Documento,
                user.Nombres,
                user.Apellidos,
                hashedPassword
            ],
            (err, res) => {
                if (err) {
                    console.log('error: ', err);
                    result(err, null);
                } else {
                    console.log('Id del nuevo Usuario: ', res.insertId);
                    // Obtener los datos del usuario insertado
                    const insertedUser = {
                        id: res.insertId,
                        Tipo_Documento: user.Numero_Documento,
                        Numero_Documento: user.Numero_Documento,
                        Nombres: user.Nombres,
                        Apellidos: user.Apellidos,
                        password: hashedPassword
                    };
                    console.log('Datos del usuario insertado:', insertedUser);
                    result(null, insertedUser);
                }
            }
        );
    } catch (error) {
        console.log('Error al encriptar la contraseña:', error);
        result(error, null);
    }
};






module.exports = User;
