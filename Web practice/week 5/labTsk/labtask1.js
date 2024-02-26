function reverseArray(Arr){
   let reversedArray =[];
    for(let i=Arr.length-1;i>=0;i--){
        reversedArray.push(Arr[i]);
       // console.log(reversedArray);
    }
     return reversedArray
}
  
const arr =[1,2,3,4];
console.log(arr);
newArray = reverseArray(arr);
console.log(newArray);

