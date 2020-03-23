// 1 - Write a function named objKey that take an object as a parameter
// and returns an array containing the keys of the object
// objKey({name:'ahmed',age:20}) ==> ['name','age']
function objKey(ob){
	var ob = {name:'ahmed',age:20};
	return Object.keys(ob);
}

// 2 - Write a function named objLength to get the length of a JavaScript
// object
// objLength({name:'ahmed',age:20}) ==> 2

function objlength(obj){
	var obj = {name:'ahmed',age:20, height: 1.8, weight: 75};
return Object.keys(obj).length;
}

// 3 - Write a function named objSort to sort an array of JavaScript
// objects based on the id
// objSort([{id:2,value:50},{id:0,value:70},{id:1,value:40}]) ==>
// [{id:0,value:70},{id:1,value:40},{id:2,value:50}]

function objSort(array){
	var arr = [];
 	for ( var i = 0; i < array.length; i++){
 		for ( var j = 0; j < array.length; j++){
			if (array[i].id> array[j].id);
				arr.push(array[j]);
}	
	return arr;
}
}
