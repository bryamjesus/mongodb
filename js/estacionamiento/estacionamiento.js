// EJERCICIOS

// Listar los vehículos del usuario de apellidos “Salas Valverde”
db.propietarios.find({ apellidos: 'Salas Valverde' }, { vehiculos: 1 })


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