var fs = require('fs');
var fileType = process.argv[3];
var path = require('path');
//console.log(fileType);
//console.log(process.argv[2]);
fs.readdir(process.argv[2], function (err, list) {
	// body...
	if (err){
		return console.error(err);
	}
	list.forEach(function  (filename) {
		// body...
		//console.log(filename);
		//var fileEnd = filename;
		var fileEnd = path.extname(filename).toString();
		fileEnd = fileEnd.substring(1, fileEnd.size)
		//console.log("this is the file END:    " +fileEnd);
		if (fileEnd == fileType){
			console.log(filename);
			//console.log("ok");
		}

	});

});