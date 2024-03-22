use santiago_ortega;

CREATE TABLE users (
    id bigint not null AUTO_INCREMENT, email varchar(180) not null, name varchar(90) not null, lastname varchar(90) NOT NULL, Phone varchar(90) NOT null, Image varchar(255) Default NULL, Password varchar(90) NOT NULL, created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (id), UNIQUE KEY email (email), UNIQUE KEY phone (Phone)
) ENGINE = InnoDB AUTO_INCREMENT = 3 DEFAULT CHARSET = utf8mb4

USE paulacarreno;

CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(90) NOT NULL, lastname VARCHAR(90) NOT NULL, phone VARCHAR(90) NOT NULL UNIQUE, email VARCHAR(180) NOT NULL UNIQUE, image VARCHAR(225) NULL, password VARCHAR(90) NOT NULL, created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL, updated_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE users (
    id bigint not null AUTO_INCREMENT,
    Tipo_Documento varchar(180) not null,
    Numero_Documento varchar(90) not null,
    nombres varchar(90) not null,
    Apellidos varchar(90) NOT NULL,
    Password varchar(90) NOT NULL,


    PRIMARY KEY (id),
    UNIQUE KEY Numero_Documento (Numero_Documento),
   
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 
