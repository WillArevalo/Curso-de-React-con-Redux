# Definiendo acciones a manejar

**Action** = Bloque de información que envía datos a la aplicación.

*Datos importantes:*

- Se envían usando el método dispatch() del store.
- Son la única fuente de información del store.
- Son objetos planos de JavaScript.

**Actions**

- Las acciones se utilizan con el método dispatch()
- Son la única fuente de información del store. Solamente de esa forma el store puede saber que los states cambian.
- Son objetos planos

```
  store.dispatch({
        type: 'ADD_SONG',
        payload: 'Despacito'// Optional
    })
```