// Crear un documento
// Documentos -> Objetos de tipo JSON
db.mongo.insertOne({ nombre: 'Jesus', correo: 'bryam@mongo.com', edad: 40, estatus: 'A' })

user2 = { nombre: 'Jesus', correo: 'bryam@mongo.com', edad: 40, estatus: 'A' }

users = [
  { nombre: 'Homero', correo: 'homero@mongo.com', edad: 42, estatus: 'I' },
  { nombre: 'Maggie', correo: 'maggie@mongo.com', edad: 27, estatus: 'A' },
  { nombre: 'Juan', correo: 'juan@mongo.com', edad: 17, estatus: 'I' },
  { nombre: 'Luana', correo: 'luana@mongo.com', edad: 39, estatus: 'A' },
  { nombre: 'Bart', correo: 'bart@mongo.com', edad: 10, estatus: 'I' },
  { nombre: 'Nelson', correo: 'nelson@mongo.com', edad: 28, estatus: 'I' },
  { nombre: 'Bojack', correo: 'bojack@mongo.com', edad: 59, estatus: 'I' },
  { nombre: 'Dayane', correo: 'dayane@mongo.com', edad: 35, estatus: 'A' },
]
db.users.insertMany([
  { nombre: 'Tod', correo: 'tod@mongo.com', edad: 23, estatus: 'A' },
  { nombre: 'Maria', correo: 'maria@mongo.com', edad: 12, estatus: 'A' },
  { nombre: 'Pepe', correo: 'pepe@mongo.com', edad: 53, estatus: 'I' },
])


