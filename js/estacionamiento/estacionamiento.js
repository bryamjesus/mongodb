// EJERCICIOS

// Listar los vehículos del usuario de apellidos “Salas Valverde”
db.propietarios.find({ apellidos: 'Salas Valverde' }, { _id: false, vehiculos: 1 })


// Listar los nombres, apellidos y el 
// departamento del vehículo de placa “U7E-567”
db.propietarios.find({ 'vehiculos.placa': 'U7E-567' }, { _id: false, nombres: true, apellidos: true })


// Listar los nombres y apellidos de propietarios que 
// tienen vehículos de color “Rojo”:
db.propietarios.find({ 'vehiculos.color': 'Rojo' }, { _id: false, nombres: true, apellidos: true })


// Listar los nombres, apellidos, departamento de propietarios así 
// como los números de placas de sus vehículos correspondientes
db.propietarios.find({}, { _id: false, nombres: true, apellidos: true, departamento: true, 'vehiculos.placa': true })


// Listar los documentos contenidos en la colección registro
db.registro.find()


// Listar  los nombres y apellidos de propietarios que tienen 
// vehículos de marca “Toyota”
db.propietarios.find({ 'vehiculos.marca': 'Toyota' }, { _id: false, nombres: true, apellidos: true })


// Listar  los nombres, apellidos, departamento de propietarios,
// así como los números de placa, marca y color de sus vehículos,
// pero únicamente de los propietarios de sexo Femenino
db.propietarios.find({ sexo: 'F' }, { _id: false, nombres: true, apellidos: true, departamento: true, 'vehiculos.placa': true, 'vehiculos.marca': true, 'vehiculos.color': true });


// Listar sólo los números de placa de los vehículos así 
// como los nombres y apellidos de propietarios de sexo Masculino 
// que tienen vehículos de marca “Toyota” color “Blanco”
db.propietarios.find({sexo: 'M', 'vehiculos.marca': 'Toyota','vehiculos.color': 'Blanco'}, { 'vehiculos.placa': true , _id: false, nombres: true, apellidos: true })
