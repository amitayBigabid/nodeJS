module.exports= function  (path,ext,callback) {
	// body...
	var fs = require('fs');
 	var path1 = require('path');
 	fs.readdir(path, function (err, list) {
	// body...
		if (err){
			callback(err, null);
		}
		result = [];
		list.forEach(function  (filename) {
			
			var fileEnd = path1.extname(filename).toString();
			fileEnd = fileEnd.substring(1, fileEnd.size)
			
			if (fileEnd == ext){
				result.push(filename);
			}

		});
		callback(null,result)


	});


};