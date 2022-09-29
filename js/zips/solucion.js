const x = {
  _id: '01001',
  city: 'AGAWAM',
  loc: [-72.622739, 42.070206],
  pop: 15338,
  state: 'MA'
}

// Obtener una lista que muestre la cantidad total 
// de la población por estado
db.zips.aggregate([
  { $group: { _id: "$state", totalPop: { $sum: "$pop" } } }
])


// Obtener una lista que muestre la cantidad total de la 
// población por estado, ordenado de mayor a menor 
// cantidad de población
db.zips.aggregate([
  { $group: { _id: "$state", totalPop: { $sum: "$pop" } } },
  { $sort: { totalPop: -1 } }
])


// Obtener una lista que muestre los 7 estados con mayor población
db.zips.aggregate([
  { $group: { _id: "$state", totalPop: { $sum: "$pop" } } },
  { $sort: { totalPop: -1 } },
  { $limit: 7 }
])


// Obtener una lista que muestre la cantidad total 
// de población por estado ordenado de menor mayor 
// cantidad de población:
db.zips.aggregate([
  { $group: { _id: "$state", totalPop: { $sum: "$pop" } } },
  { $sort: { totalPop: 1 } },
])


// Obtener una lista que muestre los 15 estados con menor población:
db.zips.aggregate([
  { $group: { _id: "$state", totalPop: { $sum: "$pop" } } },
  { $sort: { totalPop: 1 } },
  { $limit: 15 }
])


// Obtener una lista de los estados con una 
// población mayor a 10 millones de habitantes
db.zips.aggregate([
  { $group: { _id: "$state", totalPop: { $sum: "$pop" } } },
  { $match: { totalPop: { $gt: 100 * 100000 } } }
])


// Obtener una lista de los estados con una población 
// mayor a 10 millones de habitantes ordenador de mayor a menor
db.zips.aggregate([
  { $group: { _id: "$state", totalPop: { $sum: "$pop" } } },
  { $match: { totalPop: { $gt: 100 * 100000 } } },
  { $sort: { totalPop: -1 } },
])


// Obtener una lista que muestre el 
// promedio de habitantes por ciudad en cada estado
db.zips.aggregate([
  { $group: { _id: "$city", promEstado: { $avg: "$pop" } } },
])

