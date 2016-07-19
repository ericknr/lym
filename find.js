//1.Rescatando el argumentp qie es
//pasando al script

var  ageArgument = +process.argv[2];
//conectamos a la base de datos
//paso 1.cargar el driver en nuestro script

var mongodb = require('mongodb');
//paso2. El driver de mongo nos proporciona
//un cliente, por lo que extraemos de 
//la libreria

var mongoclient = mongodb.mongoclient;

//paso3. conectamos el cliente con oa base de datos
mongoclient. connect ("mongodb://127.0.0.1/learnyoumongo",
function (err, db ) {
    if(err){
        Console.log(">Error al conectarse a:c"+
        'mongodb://mongodb://127.0.0.1/learnyoumongo');
        throw err;
    }
    //Obteniendo la coleccion

    var parrostcollection = db.collection('parrots');

    //aplicando un querry sobre la coleccion

    var objetoResultado = parrostcollection.find({
        age:{$gt : ageArgument}
    })
    objetoResultado.toArray(function(err, docs){
        console.log(docs);
        //cerrando la coleccion
        db.close();

    })
})