# Bosch Bus
![BoschBus](https://i.ibb.co/d7RvJtZ/BOSCHBUSlogo.jpg)

## Índice

- [Introducción](#introduccion)
- [Definición del producto y usabilidad](#definición-del-producto-y-usabilidad)
- [Definición del usuario](#definición-del-usuario)
- [Historias de Usuario](#historias-de-usuario)
- [Prototipo](#prototipo)
- [Documentación](#documentación)


## Introducción
Este proyecto fue realizado durante el Bootcamp de Laboratoria, sede Guadalajara Generación 003, durante la semana de Talent Fest.
El equipo esta conformado por 4 estudiantes:

- Daniela Silvana Pérez González
- Gloria Ramírez Robles
- Mariana Rascón Montaño
- Lesly Zuñiga Cruz

El reto a resolver es por parte de Bosch, donde se nos planteó la problemática del transporte empresarial en donde hay una necesidad de llevar un registro sobre quien, donde y cuando se abordan las unidades, así mismo poder optimizar las rutas y asegurar que todo el personal llegue a tiempo y viajen seguros.

## Definición del producto y usabilidad
Se plantea crear una Web-App con 2 interfaces:
- Interfaz de transporte: Por medio de un dispositivo instalado en las unidades de transporte se realizará un registro diario de abordaje de empleados por medio de reconocimiento facil o un lector de código QR.
- Interfaz de Recursos Humanos: Creada para desktop, donde podrán visualizar y analizar los datos obtenidos del registro de abordaje, así como crear un mapa de rutas optimas.

## Definición del usuario
Departamento de Recursos Humanos de BOSCH.

## Historias de Usuario
#### Historia de usuario 1
El usuario requiere una herramienta para visualizar la información de una base de datos ya existente.

**DoD**
- Crear base de datos ficticia
- Crear interfaz donde se visualizará la información
- Vincular la base de datos a la interfaz
- Visualizar la base de datos en la interfaz

#### Historia de usuario 2
El usuario requiere poder filtrar los datos para visualizarlos según necesite.

**DoD**
- Crear método para filtrar los datos
- Mostrar de manera ordenada los datos filtrados

#### Historia de usuario 3
El usuario requiere gráficar la información para facilitar la visualización y análisis de la misma, y así poder conocer el número de empleados que abordan en cada horario y parada.

**DoD**
- Generar gráficas según los datos filtrados
- Visualizar en las gráficas el número de usuarios en total por turno que utilizan el transporte
- Visualizar en las gráficas el número de usuarios que abordan en cada parada

#### Historia de usuario 4
El usuario requiere visualizar un mapa con la ubicación de las paradas utilizadas en cada ruta.

**DoD**
- Utilizar el API necesaria para visualizar el mapa
- Marcar en el mapa el punto exacto de todas las paradas

#### Historia de usuario 5
El usuario requiere visualizar las rutas a tomar en cada horario considerando la información analizada previamente.

**DoD**
- Marcar en el mapa las rutas a tomar 
- Poder distinguir entre las rutas de los distintos turnos

#### Historia de usuario 6
El usuario requiere validar la información de su base de datos y mejorarla con un registro por parte de los empleados al momento de abordar a la unidad.

**DoD**
- Crear interfaz a utilizar en el dispositivo del transporte
- Utilizar código QR/Reconocimiento Facial para validar quien subió al transporte
- Agregar a la base de datos la validación de quien subió al transporte

#### Historia de usuario 7
El usuario requiere conocer en que fecha y horario el empleado abordó el transporte.

**DoD**
- Al momento de validar que el empleado subió al transporte poder guardar en la base de datos la timestamp del momento

#### Historia de usuario 8
El usuario requiere conocer la ubicación exacta en la que el empleado abordó el transporte.

**DoD**
- Obtener por medio de una librería la ubicación en la que se abordó al transporte
- Al momento de validar que el empleado subió al transporte poder guardar en la base de datos la ubicación del momento

## Prototipo
### Prototipo baja fidelidad previo a Talent Fest
#### Interfaz Transporte
![Interfaz_Transporte](https://i.ibb.co/x55PK7h/ndice3.jpg)
#### Interfaz Recursos Humanos
![Interfaz_Recursos_Humanos](https://i.ibb.co/zsC5QXf/ndice2.jpg) 
### Prototipo alta fidelidad previo a Talent Fest
https://www.figma.com/file/oa5dFThVjcvshZr0dsHgsL/BoschBus?node-id=0%3A1

## Documentación
### Planteamiento de problema y producto
![Planteamiento_de_problema_y_producto](https://i.ibb.co/3S38CWT/ndice4.jpg)
### Historias de usuario preliminares
![Historias_de_usuario_preliminares](https://i.ibb.co/VBjZHDK/ndice.jpg)

Al presentar la idea inicial previo al Talent Fest recibimos feedback orientado a reducir el alcance de nuestra web-app ya que era muy ambiciosa para el tiempo disponible, por lo que tomamos la decisión de comenzar a trabajar con la interfaz de Recursos Humanos y definir como nuestra MVP una herramienta que permite el filtrado y visualización de información relevante para la toma de decisiones en la gestión del transporte empresarial por parte de la compañía.
Se planteó manejar un flujo sencillo pero eficaz, bajo el supuesto de que la compañía ya cuenta con su propio sistema de login y seguridad para el software administrativo, por lo que nuestra propuesta se enfoca solo en la parte de la visualización de datos con sus herramientas correspondientes.
### Prototipo de Baja Fidelidad durante Talent Fest
![Prototipo_Baja_Fidelidad](https://i.ibb.co/fqgKhFM/IMG-20191205-113746.jpg)
### Prototipo de Alta Fidelidad durante Talent Fest
https://www.figma.com/proto/oa5dFThVjcvshZr0dsHgsL/BoschBus?node-id=5%3A5&scaling=scale-down

Con base en este prototipo de alta fidelidad se realizaron test de usabilidad con algunos mentores. Se obtuvieron buenos comentarios respecto a lo fácil e intuitivo que era el flujo de la interfaz, pero se realizaron algunas sugerencias:

1- Mover la parte del selector de turno a la barra de navegación ya que solo son 3 elementos y se estarán utilizando todo el tiempo

2- Reducir el espacio utilizado por las cartas donde aparecerán los datos de los empleados

3- Señalar claramente lo que las gráficas representan

4- Obtener el tiempo total de cada ruta y mostrarla en la interfaz

5- Poder seleccionar una ruta en específico y visualizar la 
información de las ubicaciones donde pasará el transporte

6- Poder hacer un filtrado por la fecha en la que el empleado usará el transporte

Debido a los tiempos del Talent Fest se decidió tomar en cuenta los puntos 1,2 y 3, y dependiendo los avances que se tengan en el transcurso del mismo se decidiría trabajar en los puntos 4,5 y 6. Aun en caso de no poderlos implementar dentro del tiempo estipulado, serán incluidos en las Historias de Usuario para futuras iteraciones y mejoras de la interfaz.