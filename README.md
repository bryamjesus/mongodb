# 🍃 MONGODB

## 👀 Ver
### Mostrar todas las bases de datos
Hay dos maneras
```bash
show dbs
```
```bash
show databases
```

### Ver la base de datos actual
```bash
db
```

### Ver las colleciones
Son como las tablas en una base de datos relaciones, lo cual estos almacenan documentos (objetos JSON)
```bash
show collections
```

### Ver todos los registros 
Con este comando puedes ver todos los registros que hay en esa ``collection``
```bash
db.users.find()
```


## 🔧 Crear

### Crear una base de datos 
```bash
use nombreBaseDatos
```
> Pero no lo crea hasta que insertemos aun que sea minimo un dato

### Insertar un dato
Con ``insertOne`` podremos ingresar un dato
```bash
db.users.insertOne({ username: 'user3', age: 23, email: 'user3@gmail.com' })
```
> El ``insert`` ya esta en desuso

El ``insertMany`` ayuda a ingresar mas de un dato
```bash
db.users.insertMany([
  { username: 'user4', age: 50, email: 'user4@gmail.com' },
  { username: 'user5', age: 70, email: 'user5@gmail.com' },
  { username: 'user6', age: 34, email: 'user6@gmail.com' },
])
```

## ✏ Editar



## ❌ Eliminar
### Eliminar base de datos actual
Elimina la base de datos en la cual nos encontramos
```bash
db.dropDatabase()
```