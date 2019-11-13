use universidad;

create table estudiante (cedula int primary key, codigoEstudiante int, 
nombre varchar(100), programa varchar(100), estado boolean, bilinguismo boolean);

create table pensum (codigoPensum int primary key, codigoEstudiante int not null, 
					codigoMteria varchar(50) not null);

create table materia(codigoMateria varchar(50) primary key, nombre varchar(100), creditos int, 
						UMES int);
