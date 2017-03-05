// Importa las librerias necesarias para tener acceso al ruteador
var express = require('express');
var router = express.Router();

// Función que se ejecuta cuando la petición es recibida por el servidor
// reacciona UNICAMENTE al método GET de HMTL
// más información al respecto de los diferentes métodos implementados en el
// protocolo HTML:
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

// Cuando recibe la petición GET, ejecuta la función() con los parámetros:
// req (request/petición)
// res (response/respuesta)
router.get('/', function(req, res) {
  // ejecuta el render de la vista `index` (archivo en `views/index.hbs`)
  // entrega información a la vista para ser inyectada en el HTML
  res.render('index',
    { title: 'Hebrew Alphabet',
      first: 'This site will help you learn Hebrew letters.',

    }
  );
});
// exprta la ruta para ser consumida por la aplicación
module.exports = router;
