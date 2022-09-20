// Crear un documento
// Documentos -> Objetos de tipo JSON
user2 = {
  'username': 'user2',
  'age': 30,
  'email': 'use2@example.com'
}

db.users.insertOne({ username: 'user3', age: 23, email: 'user3@gmail.com' })