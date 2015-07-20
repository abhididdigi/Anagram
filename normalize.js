var fs = require("fs");
function normalize(){
	//get the input from the file.
	var obj = {};
	fs.readFile('dict.txt','utf8',function(err,data){
	if(err){
		return console.log(err)
	}
	
	var data  = JSON.parse(data);
	
	for(var i in data){
		var singleSignature = data[i];
		var key = Object.keys(singleSignature)[0];
		var str = key + '';
		
		var word = singleSignature[key]; 
		
		if(str in obj){
				

				var arr = obj[str];
				arr.push(word);
				obj[str] = arr;

			}else {
				var arr = [];
				arr.push(word)
				obj[str] = arr;
			}
	
		}

		fs.writeFile("normalize.txt",JSON.stringify(obj),function(err){
		if(err){
			return console.log(err);
		}
		console.log("the file was saved");
	});

});
}
normalize();