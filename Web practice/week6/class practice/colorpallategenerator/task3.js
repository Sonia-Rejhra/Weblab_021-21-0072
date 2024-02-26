function applyFunction(arr,func){
    // return arr.map(element => func(element));   
    return arr.filter(!func);
   }
   
   num =[1,2,3,4]
   result = applyFunction(num, x => x*2);
   console.log(result);