const http = require('http');

http.createServer( (req,res)=>{

res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
 res.writeHead(200, {'Content-Type': 'application/csv' });

//  const persona = {
//      id:1,
//      nombre:'Ramiro'
//  }

 //res.write(JSON.stringify(persona) );
// res.write('id, nombre\n');
// res.write('1, Ramiro\n');
// res.write('2, Jose\n');
// res.write('3, Pedro\n');
// res.write('4, dsas\n');

 res.end();

})
.listen( 8080 );


console.log('escuchandossss', 8080);