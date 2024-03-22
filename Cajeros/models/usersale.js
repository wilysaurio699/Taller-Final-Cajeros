const db = require('../config/config');


const Usersale = {};

Usersale.create = async (user, result) => {
    try {
        // Generar un hash seguro de la contraseña


        // Consulta SQL para insertar el usuario en la base de datos
        const sql = `INSERT INTO ventas (cliente, valor, fecha, cod_factura)
                     VALUES (?, ?, ?, ?)`;

        // Ejecutar la consulta SQL con el hash seguro de la contraseña
        db.query(
            sql,
            [
                user.cliente,
                user.valor,
                user.fecha,
                user.cod_factura,
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
                        Tipo_Documento: user.cliente,
                        Numero_Documento: user.valor,
                        Nombres: user.fecha,
                        Apellidos: user.cod_factura,
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

module.exports = Usersale;
