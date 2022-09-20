// Crear un documento
// Documentos -> Objetos de tipo JSON
user2 = {
  'username': 'user2',
  'age': 30,
  'email': 'use2@example.com'
}
db.users.insertOne({ username: 'user3', age: 23, email: 'user3@gmail.com' })

users = [
  { username: 'user4', age: 50, email: 'user4@gmail.com' },
  { username: 'user5', age: 70, email: 'user5@gmail.com' },
  { username: 'user6', age: 34, email: 'user6@gmail.com' },

]
db.users.insertMany([
  { username: 'user4', age: 50, email: 'user4@gmail.com' },
  { username: 'user5', age: 70, email: 'user5@gmail.com' },
  { username: 'user6', age: 34, email: 'user6@gmail.com' },
])


