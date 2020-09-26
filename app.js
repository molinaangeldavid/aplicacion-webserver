const http = require('http');//No requiere instalacion npm porque http ya esta isntalado en node



http.createServer((req, res) => {  //Crear el servidor (request = /solicitudes/, respuesta  )

res.writeHead(200,{'content-type':'application/JSON'})//Primer argumento(200=status ejecutado correctamente). Ademas indico que la pagina sea un documento json

    let salida= {
        nombre: 'David',
        edad: 27,
        url:req.url
    }
    res.write(JSON.stringify(salida))
// res.write('Hola mundo');
    res.end();

})
.listen(3000);//Escuchando el puerto:

console.log('Escuchando el puerto 3000');