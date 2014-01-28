var connect = require('connect'),
	faye = require('faye');

//serve static files
var app = connect()
	.use( connect.static("public") )
	.use( connect.logger('dev') ).listen(3000);

//init faye
var	bayeux = new faye.NodeAdapter({mount: '/faye'});
	bayeux.attach(app);
