# EJERCICIO
Descargar los [DEV TOOLS](https://www.mongodb.com/try/download/database-tools?tck=docs_databasetools) de mongo (.zip). Al descomprimir copiar todo el contenido de la carpeta **bin** y lo ingresa en el **bin** de la 
```bash
mongoimport --db zips --collection zips < zips.json
```
```bash
mongoimport -d zips -c zips --file zips.json
```
## Problemas
Todas las soluciones los puede encontrar en [``solucion.js``](solucion.js)

1. Obtener una lista que muestre la cantidad total de la población por estado

2. Obtener una lista que muestre la cantidad total de la población por estado, ordenado de mayor a menor cantidad de población
3. Obtener una lista que muestre los 7 estados con mayor población
4. Obtener una lista que muestre la cantidad total de población por estado ordenado de menor mayor cantidad de población
5. Obtener una lista de los estados con una población mayor a 10 millones de habitantes
6. Obtener una lista de los estados con una población mayor a 10 millones de habitantes ordenador de mayor a menor
7. Obtener una lista que muestre la suma de la población de habitantes por ciudad en cada estado
8. Obtener una lista que muestre la suma de la población de habitantes por ciudad en el esado “CA”
9. Obtener una lista que muestre la suma de la población de habitantes en la ciudad de San Francisco
10. Obtener una lista que muestre la suma de la población de habitantes en la ciudad de CUSHMAN
11. Obtener una lista que muestre la suma de la población de habitantes en la ciudad de CUSHMAN en el estado MA
12. Obtener una lista que muestre el promedio de habitantes por ciudad en cada estado