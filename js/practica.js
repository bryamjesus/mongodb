// EJERCICIO
empleados = [
  { nombres: 'Julio', departamentos: 'Sistemas', sueldo: 3500 },
  { nombres: 'romina', departamentos: 'Contabilidad', sueldo: 2800 },
  { nombres: 'Kassandra', departamentos: 'Sistemas', sueldo: 3800 },
  { nombres: 'Pedro', departamentos: 'Contabilidad', sueldo: 1600 },
  { nombres: 'Miguel', departamentos: 'Logística', sueldo: 3000 },
  { nombres: 'Felipe', departamentos: 'Logística', sueldo: 2600 },
  { nombres: 'Esteban', departamentos: 'Contabilidad', sueldo: 3300 },
  { nombres: 'Marta', departamentos: 'Logística', sueldo: 2700 },
  { nombres: 'Carlos', departamentos: 'Sistemas', sueldo: 3000 },
]

db.insertMany(empleados)


// 1. Mostrar todas las áreas de la empresa
db.empleados.distinct("departamentos")


// 2. Listar los empleados que ganan 3000 o más
db.empleados.find(
  { sueldo: { $gte: 3000 } }
)


// 3. Listar los empleados que ganan menos de 3000
db.empleados.find(
  { sueldo: { $lt: 3000 } }
)

// 4. Listar los empleados del área de Logística que ganan menos de 3000
db.empleados.find(
  {
    $and: [
      { departamentos: 'Logística' },
      { sueldo: { $lt: 3000 } }
    ]
  }
)
