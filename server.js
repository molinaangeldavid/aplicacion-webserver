const express = require('express')
const app = express()   //declara una variable llamada app. Producto de la funcion de express

const hbs = require('hbs');

require('./hbs/helpers') //importe del archivo helpers

const port = process.env.PORT || 3000;
 
    app.use(express.static(__dirname + '/public'))
    /*
    Un middleware es un bloque de código que se ejecuta entre la petición que hace el usuario (request) hasta que la petición llega al servidor
    */
   hbs.registerPartials(__dirname + '/views/parciales')

    app.set('view engine','hbs');

    //helpers

    


app.get('/', function (req, res) {    //'/' Especifica todas las peticiones que entran por '/' ejecutan los callback
  
    res.render('home',{

        nombre:'david',
        anio:new Date().getFullYear(),

    }) //Express ya entiende que es un objeto y su salida sera en formato json

});
app.get('/about.hbs', function (req, res) {    //'/' Especifica todas las peticiones que entran por '/' ejecutan los callback
  
    res.render('about',{

        anio:new Date().getFullYear(),

    }) //Express ya entiende que es un objeto y su salida sera en formato json

});

 


app.listen(port,()=>{

console.log(`Escuchando peticiones en el puerto ${port}`);

});