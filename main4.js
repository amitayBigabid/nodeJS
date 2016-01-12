var fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function (error, buf) {
	// body...
	if(error){
		return console.error(error);
	}
	var lines = buf.split('\n').length - 1;
	console.log(lines);
});