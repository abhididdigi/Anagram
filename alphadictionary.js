function generateAlphaNumbering(){
	var obj = {};
	var arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	console.log(arr.length);
	for(var alpha in arr){	
		obj[arr[alpha]] = alpha;
	}
	console.log(obj);

}

generateAlphaNumbering();