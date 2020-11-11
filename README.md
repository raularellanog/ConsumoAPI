# Consumo de API JSONPlaceholder

Por medio de JavaScript con función fetch

JSONPlaceholder es una API REST en línea gratuita que puede utilizar siempre que necesite datos falsos.

```javascript
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
```
