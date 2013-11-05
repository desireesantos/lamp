var narf = require('narf');
var board = new require('johnny-five').Board();

board.on('ready', function() {
  var val = 0;
 
  this.pinMode( 13, 1 );
  this.digitalWrite( 13, 1 );
  
  var self = this;
 
  var APIFunctions = {
    POST : {
      ledSwitch : function ( data, callback ){
        data.url.value = parseInt( data.url.value, 0 );
        if( data.url.value === 1 || data.url.value === 0){
          self.digitalWrite( 13, data.url.value );
        }
        callback( data.url.value );
      }
    }
    };

  console.log( narf );
 
var hs = new narf.HttpServer( { port : 8080 } ).start();
hs.on( 'port', function( port ){
  hs.addAPI( { functions : APIFunctions } );
} );
  
});

narf.pageServer({ 
  port: 8000,
  path: __dirname + '/client/'
});