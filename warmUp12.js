// 1-Write a function that takes a string as an input and returns the reverse of each letter
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o0l1l2e3h4"

// ===> word ===> ["bonjour"]


function reverse(string){
	var str = "";
	var i = 0;
	while( i<string.length){
			str= str + string[string.length-(i+1)]+i;
			i++;
	}return str;
}


// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]

function sameLength(arr){
	var array = [];
	var i = 0;
	for(var j = 0; j<arr.length; j++){
		while(i<arr.length){
		//while(j<arr.length){
				if ( arr[j].length === arr[i].length && i!==j){
					array.push(arr[j]);
					array.push(arr[i]);	
					//j++;
				//}
			}i++;
		}return array;
	}
}
