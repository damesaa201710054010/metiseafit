use universidad;

create table estudiante (cedula int primary key, codigoEstudiante int, 
nombre varchar(100), programa varchar(100), estado boolean, bilinguismo boolean);

create table pensum (codigoPensum int primary key, codigoEstudiante int not null, 
					codigoMteria varchar(50) not null);

create table materia(codigoMateria varchar(50) primary key, nombre varchar(100), creditos int, 
						UMES int);

# Inserts
INSERT INTO `estudiante` (`cedula`, `codigoEstudiante`, `nombre`, `programa`, `estado`, `bilinguismo`) VALUES ('1001017510', '2018101170', 'Juan Manuel Young Hoyos', 'Sistemas', '1', '1');

# Get estudiantes
SELECT * FROM `estudiante`