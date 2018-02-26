# Usando datos inmutables en Platzi Video

Por buenas practicas debemos tener nuestros datos inmutables, y cada vez que queramos cambiar algo, generar un nuevo estado, utilizamos la libreria immutableJS redux-immutable

Esta practica se aplica dentro de los diferentes reducers
fromJS nos ayuda a convertir cualquier cosa en inmutable
y para combinar nuestros reducers utilizamos de la libreria redux-immutable el combineReducers
todas mis propiedades pasaron de ser objetos a mapas inmutables

`npm install immutable redux-immutable --save`