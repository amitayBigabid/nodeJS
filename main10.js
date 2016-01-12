var net = require('net')
var port = process.argv[2];
function pad(n) { return n < 10 ? '0' + n : n }
var server = net.createServer(function (socket) {
	// socket handling logic
	var date = new Date();
	dateformat = date.getFullYear() + "-"
	    + pad(date.getMonth() + 1) + "-"
	    + pad(date.getDate()) + " "
	    + pad(date.getHours()) + ":"
	    + pad(date.getMinutes()) + "\n";
	socket.write(dateformat);
	socket.end();


})
server.listen(port)