conn = new Mongo();
db = conn.getDB("estacionamiento");

db.propietarios.insert(
  [
   {_id: 1,nombres: 'Juan', apellidos: 'Salas Valverde', sexo: 'M', departamento: '101', telefono: '232425', celular: '959988770', estado:'A',
    vehiculos: [{placa: 'A40-345', marca: 'Nissan', color: 'Rojo', estado:'A'},
                {placa: 'B5H-345', marca: 'Toyota', color: 'Blanco', estado:'A'}]
   },
   {_id: 2,nombres: 'Ana', apellidos: 'Diaz Quequezana', sexo: 'F', departamento: '102', telefono: '256565', celular: '950099887', estado:'A',
    vehiculos: [{placa: 'C3P-123', marca: 'Nissan', color: 'Rojo', estado:'A'},
                {placa: 'D4T-123', marca: 'Toyota', color: 'Blanco', estado:'A'},
                {placa: 'E5H-123', marca: 'Chevrolet', color: 'Gris', estado:'A'}]
   },
   {_id: 3,nombres: 'Pedro', apellidos: 'Campos Fernandez', sexo: 'M', departamento: '103', telefono: '455050', celular: '959565678', estado:'A',
    vehiculos: [{placa: 'F9M-456', marca: 'Peugeot', color: 'Negro', estado:'A'}]
   },
   {_id: 4,nombres: 'Maria', apellidos: 'Torreblanca Gallegos', sexo: 'F', departamento: '104', telefono: '445656', celular: '954455660', estado:'A',
    vehiculos: [{placa: 'J9Y-567', marca: 'Nissan', color: 'Verde', estado:'A'},
                {placa: 'U7E-567', marca: 'KIA', color: 'Rosado', estado:'A'}]
   },
   {_id: 5,nombres: 'Marco', apellidos: 'Zeballos Lazarte', sexo: 'M', departamento: '105', telefono: '288778', celular: '951234567', estado:'A',
    vehiculos: [{placa: 'T6Y-678', marca: 'Toyota', color: 'Beige', estado:'A'}]
   },
 ]);

db.registro.insert( 
  [ 
   {fecha: '2016-01-01T08:05:30', placa: 'A40-345', movimiento: 'Salida'},
   {fecha: '2016-01-01T13:25:30', placa: 'A40-345', movimiento: 'Entrada'},
   {fecha: '2016-01-01T08:15:20', placa: 'C3P-123', movimiento: 'Salida'},
   {fecha: '2016-01-01T13:25:30', placa: 'C3P-123', movimiento: 'Entrada'},
   {fecha: '2016-01-01T20:12:20', placa: 'C3P-123', movimiento: 'Salida'},
  ]);