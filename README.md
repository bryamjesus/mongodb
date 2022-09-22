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

### Seleccionar la base de datos
Aca podemos seleccionar una base que viene con mongo o si es que no existe la base de datos, lo que hace mongo es 'crearla' pero ojo si ingresa ``show dbs`` no saldra hasta ingresarle un dato. El comando consta de la palabra ``use`` seguido del nombre de la base de datos.

```bash
use mongo
```

### Ver las colleciones
Son como las tablas en una base de datos relaciones, lo cual estos almacenan documentos (objetos JSON)
```bash
show collections
```

## 🔧 Insertar
### Insertar un dato
Con ``insertOne`` podremos ingresar un dato
```bash
db.mongo.insertOne({ nombre: 'Jesus', correo: 'bryam@mongo.com', edad: 40, estatus: 'A' })
```
> El ``insert`` ya esta en desuso

El ``insertMany`` ayuda a ingresar mas de un dato
```bash
db.users.insertMany([
  { nombre: 'Tod', correo: 'tod@mongo.com', edad: 23, estatus: 'A' },
  { nombre: 'Maria', correo: 'maria@mongo.com', edad: 12, estatus: 'A' },
  { nombre: 'Pepe', correo: 'pepe@mongo.com', edad: 53, estatus: 'I' },
])
```

Para insertar varios puedes ingresar el siguiente codigo en la terminal
```js
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
```
Ahora ingresa este comando
```bash
db.mongo.insertMany(users)
```
> Podemos guardar variables

### Save
```bash
db.mongo.save({ nombre: 'PB', correo: 'pb@mongo.com', edad: 42, estatus: 'I' })
```
> Pero aun asi se aconseja ``insertOne`` y ``insertMany``

Todos estos registros ingresados al momento de crearlos estos se crear con un identificador (id) la cual consiste en el Timestamp, el identificador para el servidor, PID, Autoincrement. Lo cual esto nos garantiza que el id nunca se repita.

## 🔎 Buscar
### Ver todos los registros 
Con este comando puedes ver todos los registros que hay en esa ``collection``
```bash
db.users.find()
```
### Filtros
Para buscar utilizaremos el ``findOne``  y lo que pondremos un campo o los campos que lo caractericen
```bash
 db.mongo.find({nombre:'Homero'})
```
> Puedes poner más campos solo los separas con coma

Con el ``$gt`` le decimos que nos traiga todos los que su edad se mayor a 30
```bash
 db.mongo.find({edad: {$gt: 30}})
```
Si solo quieres traer solo un resultado puedes poner ``findOne``
```bash
 db.mongo.findOne({edad: {$gt: 30}})
```
Los operadores relaciones son <br>
| Nombre | Significado |
|-|-|
| $gt | greater than|
| $gte | greater than equal |
| $lt | less than |
| $lte | less than equal|


## ✏ Editar


## ❌ Eliminar
### Eliminar base de datos actual
Elimina la base de datos en la cual nos encontramos
```bash
db.dropDatabase()
```