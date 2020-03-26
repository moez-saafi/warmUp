// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors

var females = ["Emna","mariem", "hiba", "khawola"];
var males = ["zied", "ahmed", "hamza", "dhia", "fedi"];
var instructors = ["omar", "Seif", "dhia", "Houda"];

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

function middleOfArray(array){
	for(var i=0; i<array.length; i++){
		return array[Math.floor(array.length/2)];
	}
}

// 3-Change all the numbers in the array to be multiplied by two for even indexes.

function multiplyByTwo(arr){
	var newArr = [];
	var i=0;
	while(i<arr.length){
		if((i)%2 === 0){
			newArr.push(arr[i]*2);
		}else {
			newArr.push(arr[i]);
		}
		i++;
	}
return newArr;
}

