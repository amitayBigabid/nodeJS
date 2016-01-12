var sum = Number();
process.argv.forEach((val,index,array)=>{
	if(index>1){
		sum = sum +Number(val);
	}

});
console.log(sum);