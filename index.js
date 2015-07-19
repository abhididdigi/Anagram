//program to build a dictionary using JavaScript

//global declaration of the object that stores the Signature of all words in a dictionary

var signatures = {}; //finally write the string into a text file.

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
	var ret = [];
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


//once you have your dictionary build, you would want to build a master array with objects that store the signature and the corresponding word.
function compareSimilar(){
	//get the input from the file.
	//TODO : iteration - fetch the data from a file.
	var obj = {};
	for(){
		var str ; //TODO: here is where the concatination will happen.
		var word; 
		if(obj.indexOf(str) == 'undefined'){
			var arr = [];
			arr.push(word)
			obj[str] = arr
		}else {
			var arr = obj[str];
			arr.push(word);
			obj[str] = arr;
		}

	}
	return obj;
}

//finally for any given word, search the obj object and that will give out the anagrams.





