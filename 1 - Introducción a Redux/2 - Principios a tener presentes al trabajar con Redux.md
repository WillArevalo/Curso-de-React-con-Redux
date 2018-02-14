# Principios a tener presentes al trabajar con Redux

## Tres principios de Redux:

- Única fuente de la verdad.
    El estado de toda tu aplicación esta almacenado en un árbol guardado en un único store lo que hace mas fácil el proceso de depuración.
- El estado es de solo lectura.
    La única forma de modificar el estado es emitiendo una acción, un objeto que describe que ocurrió.
- Los cambios se realizan con funciones puras. Una función que sea fácil de leer.
    Los reduces son funciones puras que toman el estado anterior y una acción, y devuelven un nuevo estado.


*Básicamente el ciclo de Redux sería algo como:*

1. Tienes tu vista (UI)
2. Tu vista va a enviar una acción
3. Tu acción va a llamar un reducer
4. Tu reducer va a llamar a tu store
5. Tu store va a actualizar el estado
6. El estado va a actualizar tu vista (interfaz/UI)
