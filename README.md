# 🍃 MongoDB 
## Comandos Basicos
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

## Crear una base de datos
```bash
use nombreBaseDatos
```
> Pero no lo crea hasta que insertemos aun que sea minimo un dato

## Ver las colleciones
Son como las tablas en una base de datos relaciones, lo cual estos almacenan documentos (objetos JSON)
```bash
show collections
```

## Insertar un dato
```bash
db.users.insertOne({ 'username': 'user2', 'age': 30, 'email': 'use2@example.com' })
db.users.insertOne({ username: 'user3', age: 23, email: 'user3@gmail.com' })
```

## Eliminar base de datos actual

```bash
db.dropDatabase()
```