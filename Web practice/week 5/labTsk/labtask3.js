function applyFunction(arr,func){
 return arr.map(element => func(element));   
}

num =[1,2,3,4]
result = applyFunction(num, x => x*2);
console.log(result);