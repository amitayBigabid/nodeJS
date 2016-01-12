var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var numOfLines = 0;
for (var i = 0; i < buf.length; i++)
{
	if(buf[i] == 10)//for space
	{
		numOfLines++;

	}

}
console.log(numOfLines);