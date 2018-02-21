# Conectando datos a los componentes

Conectaremos datos en específico dentro de nuestros componentes.
Primero obtendremos exclusivamente los datos que utiliza el componente.

Utilizaremos lo siguiente:
connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options]

[mapStateToProps(state, [ownProps]): stateProps] Es una función en la que si el argumento está especificado el nuevo componente se suscribe para recibir actualizaciones, lo que significa que cada vez que el store es actualizado la función mapStateToProps será llamada para obtener las propiedades.
