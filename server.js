const
   HTTP   = require( 'http'   ),
   STATIC = require( 'static' ),

   HOST   = process.env.npm_package_config_host,
   PORT   = process.env.npm_package_config_port;

HTTP
   .createServer( STATIC )
   .on( 'clientError', ( error, socket ) => {
      socket.end( 'HTTP/1.1 400 Bad Request\r\n\r\n' );
   })
   .listen( PORT, HOST, _=> {
      console.log( `Server running on http://${ HOST }:${ PORT }` );
   });