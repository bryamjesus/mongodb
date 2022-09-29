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


// Obtener una lista que muestre la suma 
// de la población de habitantes por ciudad en cada estado
db.zips.aggregate([
  {
    $group: {
      _id: { state: "$state", city: "$city" },
      popSum: { $sum: "$pop" }
    }
  },
])


// Obtener una lista que muestre la suma de la 
// población de habitantes por ciudad en el esado “CA”
db.zips.aggregate([
  {
    $group: {
      _id: { state: "$state", city: "$city" },
      popSum: { $sum: "$pop" }
    }
  },
  { $match: { "_id.state": "CA" } }
])


// Obtener una lista que muestre la suma de la población 
// de habitantes en la ciudad de San Francisco
db.zips.aggregate([
  {
    $group: {
      _id: { state: "$state", city: "$city" },
      popSum: { $sum: "$pop" }
    }
  },
  { $match: { "_id.city": "SAN FRANCISCO" } }
])


// Obtener una lista que muestre la suma de 
//la población de habitantes en la ciudad de CUSHMAN
db.zips.aggregate([
  {
    $group: {
      _id: { state: "$state", city: "$city" },
      popSum: { $sum: "$pop" }
    }
  },
  { $match: { "_id.city": "CUSHMAN" } }
])


// Obtener una lista que muestre la suma de la población 
// de habitantes en la ciudad de CUSHMAN en el estado MA
/* 
SELECT state, city, SUM(pop) AS popSum FROM zips GroupBy state, 
city WHERE city='SAN FRANCISCO' AND state='MA'
*/
db.zips.aggregate([
  {
    $group: {
      _id: { state: "$state", city: "$city" },
      popSum: { $sum: "$pop" }
    }
  },
  { $match: { "_id.city": "CUSHMAN", "_id.state": "MA", } }
])


// Obtener una lista que muestre el promedio
// de habitantes por ciudad en cada estado.
db.zips.aggregate([
  {
    $group: {
      _id: { state: "$state", city: "$city" },
      popSum: { $sum: "$pop" }
    }
  },
  { $group: { _id: "$_id.state", avgCityPop: { $avg: "$popSum" } } }
])

/*
SELECT state, city, AVG(SUM(pop)) AS avgCityPop 
FROM zips GroupBy state, city
*/



