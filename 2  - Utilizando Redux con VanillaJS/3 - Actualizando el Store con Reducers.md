# Actualizando el Store con Reducers

**Reducer** = Modifica el estado.

*Datos importantes:*

- Es una función pura.
- Puede haber más de un reducer en una aplicación pero solo debe haber un store.
- Devuelve el siguiente estado.

*¿Qué es una función pura?*

“Dados los mismos parámetros/argumentos/entradas deben retornar el mismo resultado, sin importar el número de veces que se llame”

**Reducer**

- Modifican nuestro estado
- Puede haber múltiples reducers en la aplicación y un solo store.
- Devuelve el siguiente estado.

**Que no deben hacer**

- Modificar los argumentos recibidos
- Llamar a APIs (u otras tareas secundarias)
- Llamar a funciones no puras como Date.now(), Math.random()

## Funciones puras

Es un concepto de programación funcional, hace que el código sea más legible. Tienen las siguientes condiciones:
        Dados los mismos datos de entrada, deben retornar el mismo resultado sin importar el número de veces que se llame.
        No debe tener objetos secundarios.

El reducer se iguala a una función, esta función recibe dos parámetros que son el state y la action y en la función se debe definir que se hace con state y action; generalmente se valida con un switch.