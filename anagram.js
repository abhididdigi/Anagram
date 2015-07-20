//anagram.js 
//takes a word as input and chews out similar words:

var alphaDict = { a: '0',
  b: '1',
  c: '2',
  d: '3',
  e: '4',
  f: '5',
  g: '6',
  h: '7',
  i: '8',
  j: '9',
  k: '10',
  l: '11',
  m: '12',
  n: '13',
  o: '14',
  p: '15',
  q: '16',
  r: '17',
  s: '18',
  t: '19',
  u: '20',
  v: '21',
  w: '22',
  x: '23',
  y: '24',
  z: '25' }



//idea : Parse all the letters and build an array. so the length of array in signatures  = total number of words in the dictionary
function buildSignature(word){
	var wordCopy = word;

	
	var arr = new Array(26);
	var ret = {};
	//initialize the array to zero
	for(var i=0; i<26; i++){
		arr[i] =0;
	}
	for(var i in word){
		var character = word[i];
		
		arr[alphaDict[character]]++;
	}
	
	ret[arr] = wordCopy;
	
	return ret;

}

var word = '';
process.argv.forEach(function(val,index,array){
	word  = val;
});
var fs = require("fs");
 fs.readFile('normalize.txt','utf8',function(err,data){
	if(err){
		return console.log(err)
	}
	var norm = JSON.parse(data);
	var signature = buildSignature(word);
	signature = Object.keys(signature)[0];
	signature = signature+ '';
	console.log(norm[signature]);});



